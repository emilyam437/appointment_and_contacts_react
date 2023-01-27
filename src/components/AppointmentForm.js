import React, {useState} from "react";
import { ContactPicker } from "./ContactPicker";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState(null);

  const handleSelect = (selectedOption) => {
    setSelected(selectedOption);
    setContact(selectedOption['value']);
  };

  // const getTodayString = () => {
  //   const [month, day, year] = new Date()
  //     .toLocaleDateString("en-US")
  //     .split("/");
  //   return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  // };

  const getDateString = (start) => {
    const [month, day, year] = start
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const setDates = (dateChosen) => {
    setDate(getDateString(dateChosen))
    setStartDate(dateChosen)
  }

 const addOneYear = (start) => {
    start.setFullYear(start.getFullYear() + 1);
    return start;
  }

  return (
    <div>
    <form>
    <input type="text" placeholder="Enter title" 
    required onChange={(e)=>{setTitle(e.target.value)}} value={title} className="formItem apptFormItemOne"/>

    <ContactPicker 
    contacts={contacts}
    handleSelect={handleSelect}
    selected={selected}
    setSelected={setSelected}
    />

  <DatePicker value={startDate} 
    onChange={(dateChosen) => setDates(dateChosen)} 
     className="formItem"
     autoFocus={true}
     maxDate = {addOneYear(new Date())}
     minDate= {new Date()}
     clearIcon = {null}
     required
     
      />
<br/>
<TimePicker 
onChange={(timeChosen)=>setTime(timeChosen)} 
value={time} 
amPmAriaLabel	= "Select AM/PM"
className="formItem"
clearIcon = {null}
disableClock
required
hourPlaceholder = 'hh'
minutePlaceholder="mm"
/>
<br/>
    <button type="submit" onClick={handleSubmit} className="formItem">Submit</button>
    </form>
    </div>
  );
};
