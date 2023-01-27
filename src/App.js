import React, {useState} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AppointmentsPage } from "./pages/AppointmentPage";
import { ContactsPage } from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {

// Keep track of the contacts

let [contacts, setContacts] = useState([{name: 'Emily', phone: '1234567890', email: 'emily@emily.com'}]);

// Keep track of appointments

let [appointments, setAppointments] = useState([]);

// Callback functions

const addNewContact = (name, phone, email) => {
    setContacts([...contacts, {"name":name, "phone": phone, "email": email}])
}

const addNewAppointment = (title, contact, date, time) => {
    setAppointments([...appointments, {"title":title, "contact": contact, "date": date, "time": time}])
}

const deleteContact = (contactToDelete) => {
  let ans = window.confirm('Delete this contact?')
  if (ans) {
  let newContactList = contacts.filter(item => item.name !== contactToDelete.name)
  setContacts(newContactList)
}
}

const deleteAppointment = (appointmentToDelete) => {
  let ans = window.confirm('Delete this appointment?')
  if (ans) {
  let newAppointmentList = appointments.filter(item => item !== appointmentToDelete)
  setAppointments(newAppointmentList)
}
}

  return (

    <div className="App">
<Router>
<NavLink to='/contacts' className="navBarItem" activeclassname="active">Contacts</NavLink>
<NavLink to='/appointments' className="navBarItem" ctiveclassname="active">Appointments</NavLink>
        <Routes>
          <Route path='/appointments' element={<AppointmentsPage 
          appointments={appointments} 
          addAppointment={addNewAppointment}
          contacts={contacts}
          deleteAppointment={deleteAppointment}
          />} />
          <Route path='/contacts' element={<ContactsPage 
          contacts={contacts} 
          addContact={addNewContact}
          deleteContact={deleteContact}
          />} /> 
          <Route path='/' element={<ContactsPage 
          contacts={contacts} 
          addContact={addNewContact}
          deleteContact={deleteContact}
          />} /> 
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
