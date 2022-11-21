import { useState } from "react";
import {Form,Button} from './AddContact.styled'


export const AddContact = (props) => {
  const [number, setNumber] = useState('')
  const [name,setName] = useState('')

   const handelChange = e => {
     const test = e.target.name

     switch (test) {
       case "name":
       
         setName(e.target.value)
        
         break;
       case 'number':
         setNumber(e.target.value)
         break;
     
       default:
  
        break;
     }
     
  
    }
    const handelSubmit = e => {
      e.preventDefault()
      console.log(name);
      console.log(number);
        props.onSubmits(name,number)

        
         reset()
    }


const reset = () => {
  setNumber('')
  setName('')

  }


    return  (
          <Form action=""  onSubmit={handelSubmit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handelChange}
          />
        </label>

        <label htmlFor="">
          Number
          <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handelChange}
            />
                 
        </label>       
        <Button type="submit">Add Contact</Button>
        </Form>
        
)

    

}