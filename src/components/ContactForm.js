import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <div>
<form>
<input type="text" placeholder="Enter name" required onChange={(e)=>{setName(e.target.value)}} value={name}/>
<input type="text" placeholder="Enter phone" required onChange={(e)=>{setPhone(e.target.value)}} value={phone} 
        //pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
        />
<input type="text" placeholder="Enter email" required onChange={(e)=>{setEmail(e.target.value)}} value={email}
        pattern = "[^@\s]+@[^@\s]+\.[^@\s]+"/>
<button type="submit" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  );
};