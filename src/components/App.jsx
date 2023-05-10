import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
