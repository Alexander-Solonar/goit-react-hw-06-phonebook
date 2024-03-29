import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { AppDispatch, RootState } from '../../redux/store';
import css from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const contacts = useSelector((state: RootState) => state.contacts.data);
  const dispatch = useDispatch<AppDispatch>();

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const data = visibleContacts();

  return (
    <ul className={css.list}>
      {data.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span className={css.name}>{name}:</span>
          <span className={css.number}> {number}</span>
          <button
            className={css.button}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
