import React, { useState } from "react";

import "./Styles/app.css";
import Contact from "./Components/Contact";
import ContactAdder from "./Components/ContactAdder";
import NavBar from "./Components/NavBar";

const App = () => {
  /*const initialContacts=[
    {
      name:"John",
      mobile:"8986475243",
      location:"Nepal" ,
   
       },{
       name:"Dava",
      mobile:"89864790843",
      location:"Nepal" 
   },
   ];
  
  const [contacts,setContacts]=useState([initialContacts]);*/
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allcontacts = [...contacts, contactData];
    setContacts(allcontacts);
    localStorage.setItem("contacts", JSON.stringify(allcontacts));
  };

  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list">
        <h3>Contact List:</h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}
        <button onClick={clearAllContacts} style={{ background: "#cc0800" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;
