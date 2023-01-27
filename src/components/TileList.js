import React from "react";
import { Tile } from "./Tile";

export const TileList = ({objectArray, deleteContact, deleteAppointment }) => {
  return (
    <div>

{objectArray.map((value, key) => {
  return <div>
  <Tile propObject={value} 
  deleteContact={deleteContact} 
  deleteAppointment={deleteAppointment}/>
  </div>
})}
    </div>
  );
};
