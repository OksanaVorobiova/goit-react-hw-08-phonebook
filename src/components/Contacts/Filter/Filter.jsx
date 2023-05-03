import { FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
//import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} value={filter} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
