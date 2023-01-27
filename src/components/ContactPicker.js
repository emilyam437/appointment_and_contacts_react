import React from "react";
import Select from "react-select";

export const ContactPicker = ({contacts, handleSelect}) => {

    let options = [
        {}
      ];

      {contacts.map((contact, key) => {
        options.push({value: contact['name'], label: contact['name']})
  })} 

  return (
    <div>
        <Select 
        options={options} 
        onChange={handleSelect} 
        autoFocus={true}
        className = "formItem"
        placeholder= 'Choose a contact'
        required
        style={{ color: 'green' }}
        />
    </div>
  );
};