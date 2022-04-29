import React from 'react'
import List from "./List";
import Form from "./Form";
import  {useState, useEffect} from 'react';

function Contacts() {
const [contacts, setContacts]= useState([

]);
useEffect(()=>{
console.log(contacts);
return ()=>{}
},[contacts])
  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts