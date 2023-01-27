import React, { useState, useEffect } from "react";
import { TileList } from "../components/TileList";
import { ContactForm } from "../components/ContactForm";

export const ContactsPage = ({contacts, addContact, deleteContact }) => {

    const [name, setName] = useState('')
    const [nameList, setNameList] = useState([]);
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

useEffect(()=>{
    contacts.map((value, key) => {
        setNameList([...nameList, value['name']])
})
}, [])

const handleSubmit = (e) => {
    e.preventDefault();
    if (nameList.includes(name)) {
        alert('This name already exists in the database. Choose another.')
    } else {
        setNameList([...nameList, name])
        addContact(name, phone, email)
        setName('')
        setPhone('')
        setEmail('')
   }
  };

  return (
    <div>
      <section>
        <br/>
        <h2>Add Contact</h2> 
        <ContactForm 
                  name={name}
                  setName={setName}
                  phone={phone}
                  setPhone={setPhone}
                  email={email}
                  setEmail={setEmail}
                  handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
        objectArray = {contacts} 
        deleteContact = {deleteContact}
        />
      </section>
    </div>
  );
};
