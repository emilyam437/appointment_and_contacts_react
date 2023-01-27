import React, {useState} from "react";
import {AppointmentForm} from "../components/AppointmentForm"
import {TileList} from "../components/TileList"

export const AppointmentsPage = ({appointments, contacts, addAppointment, deleteAppointment }) => {

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
        addAppointment(title, contact, date, time)
        setTitle('')
        setContact('')
        setDate('')
        setTime('')
  };

  return (
    <div>
      <section>
        <br/>
        <h2>Add Appointment</h2>
        <AppointmentForm 
contacts = {contacts}
title = {title}
setTitle = {setTitle}
contact = {contact}
setContact = {setContact}
date = {date}
setDate = {setDate}
time = {time}
setTime = {setTime}
handleSubmit = {handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objectArray ={appointments}
        deleteAppointment={deleteAppointment}/>
      </section>
    </div>
  );
};
