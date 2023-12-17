import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterInput
      type="text"
      placeholder="Name"
      onChange={evt =>
        dispatch(setFilter(evt.target.value.trim().toLowerCase()))
      }
    />
  );
};
