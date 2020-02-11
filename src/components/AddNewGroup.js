import React, { useState } from "react";
import "../styles/monthly.css";

function AddNewGroup(props) {
  const [name, setname] = useState("");

  const handleSubmit = (event)=> { 
    event.preventDefault(); 
    props.handleSubmit(name)
  } 
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        className="input"
        value={name}
        onChange={e => setname(e.target.value)}
        placeholder="Group Name"
      />
      <button type="submit">Add New Group</button>
    </form>
  );
}


export default AddNewGroup;
