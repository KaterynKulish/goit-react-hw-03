import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = newContact => {
    setContacts(prev => [newContact, ...prev]);
  };

  const handleDelete = id => {
    const newListContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newListContacts);
  };

  const { filtered, setFiltered } = useState([]);
  const handleSearch = values => {
    const filteredContacts = contacts.filter(
      contact => values === contact.name
    );
    setFiltered(filteredContacts);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox handleSearch={handleSearch} />
      <ContactList
        contacts={contacts}
        // filteredContacts={filteredContacts}
        handleDelete={handleDelete}
        filtered={filtered}
      />
    </>
  );
};

export default App;
