import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectFilters } from '../../redux/filtersSlice';
import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <form className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        className={css.input}
        id={searchId}
        onChange={handleFilterChange}
      />
    </form>
  );
}
