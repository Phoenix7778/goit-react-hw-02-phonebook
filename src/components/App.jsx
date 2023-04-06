import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './contactsForm/ContactsForm';
import { ContactsList } from './contactsList/ContactsList';
import { Filter } from './contactsFilter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    const isExist = this.state.contacts.some(
      contact => contact.name === newContact.name
    );

    this.setState(({ contacts }) => {
      if (isExist) {
        alert(`${newContact.name} is already in contacts`);
      } else {
        return {
          contacts: [newContact, ...contacts],
        };
      }
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeValue = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContactsOnLowerCase = filter.toLocaleLowerCase();

    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtredContactsOnLowerCase)
    );

    return (
      <div
        style={{
          padding: '15px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeValue={this.onChangeValue} />
        <ContactsList
          contacts={filtredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
