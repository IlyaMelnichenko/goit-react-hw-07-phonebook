import { useDispatch, useSelector } from 'react-redux';
import { StyledFilter } from './StyledFilter';
import { changeFilter, getFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <StyledFilter>
      <label>
        Find contacts by name
        <input
          onChange={e => dispatch(changeFilter(e.target.value))}
          value={filter}
        ></input>
      </label>
    </StyledFilter>
  );
};
