import React from "react";

export const Tile = ({propObject, deleteContact, deleteAppointment}) => {

  return (
    <div className="tile-container">
    {Object.keys(propObject).map((key, index) => {
        return (
            <div key={index}>
            <p className="tile"><strong>{key}:</strong> {propObject[key]}</p>
            </div>
  );
      })}
     {propObject['name'] ?
     <button onClick={()=>deleteContact(propObject)}>Delete</button> :
     <button onClick={()=>deleteAppointment(propObject)}>Delete</button>
    }

<hr />
    </div>
  );
};