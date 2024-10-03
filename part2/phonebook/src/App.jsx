import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import personService from './components/services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addContact = (event) => {
    event.preventDefault();
    if (persons.some((object) => object.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const personRecord = persons.find((n) => n.name === newName);
        const changedPerson = { ...personRecord, number: newNumber };
        personService
          .update(personRecord.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== personRecord.id
                  ? person
                  : returnedPerson
              )
            );
          });
      } else {
        return;
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const namesToShow =
    searchTerm === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchTerm} onChange={handleNewSearchTerm} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addContact}
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <div>
        {namesToShow.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            handleDelete={() => handleDelete(person.id, person.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
