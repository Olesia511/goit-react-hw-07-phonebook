import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterByName = nameContact => dispatch(setFilter(nameContact));

  return (
    <FilterInput
      type="text"
      placeholder="Name"
      onChange={evt =>
        handleFilterByName(evt.target.value.trim().toLowerCase())
      }
    />
  );
};
