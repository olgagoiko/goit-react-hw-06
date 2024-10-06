import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filteredName) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredName.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  const filteredName = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, filteredName);

  return (
    <ul className={css.container}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
