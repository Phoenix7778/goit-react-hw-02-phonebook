import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChangeValue }) => {
  return (
    <>
      <Label>Find contacts by name </Label>
      <Input type="text" value={value} onChange={onChangeValue} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
