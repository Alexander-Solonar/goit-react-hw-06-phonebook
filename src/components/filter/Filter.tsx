import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { AppDispatch, RootState } from '../../redux/store';
import css from './Filter.module.css';
import { ChangeEvent } from 'react';

const Filter = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <label className={css.label}>
      <span>Find contacts by name</span>

      <input
        className={css.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;
