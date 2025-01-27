import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete, filtered }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.person}>
          <Contact
            contact={contact}
            handleDelete={handleDelete}
            filtered={filtered}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
