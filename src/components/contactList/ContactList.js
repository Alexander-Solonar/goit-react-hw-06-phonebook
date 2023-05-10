import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.defaultContacts);
  const dispatch = useDispatch();

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
