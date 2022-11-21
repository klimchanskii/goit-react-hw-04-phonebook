import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { AddContact } from "./AddContact/AddContact";
import { ListContact } from "./ListContact/ListContact";
import { Filter } from "./Filter/Filter";

export const App = () => {
  const [contacts, setContact] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
  const contacts = localStorage.getItem('contacts')
      const localContacts = JSON.parse(contacts)
      console.log(localContacts);
      if (localContacts.length > 0) {
        setContact([...localContacts])
      }
   

  }, [])
  useEffect(() => {

    localStorage.setItem("contacts", JSON.stringify(contacts))
  },[contacts])


  const testhandelSubmit = (name,number)=> {

    const contact = {
        id: nanoid(5),
        name: name,
      number: number
    }
    const isExist = contacts.find(contac => contac.name === name);
    if (isExist) {
      alert(`${name} is already in contact`)
      return
    } 

    setContact(prevContact => 
      [...prevContact,contact]
    )
    
  }

  const handelFilterChange = e => {

    setFilter(e.target.value)
  }

  const deletContact = (id) => {
    setContact(() => (
     contacts.filter(contact => contact.id !== id)
      
    ))

  }

  const filterContact = () => {
    const normalizerFilter = filter.toLocaleLowerCase()
    
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizerFilter))

  }

    const visible = filterContact()
    return (
      <div>
            <h1>Phonebook</h1>
        <AddContact onSubmits={testhandelSubmit} />
        <h2>Contacts</h2>
        <Filter change={handelFilterChange } filterValue={filter} />
        <ListContact contacts={visible}
          del={deletContact}
        />


      </div>

      
    
    )
  }
  

