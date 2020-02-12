import React, { useState } from "react";
import "../styles/monthly.css";

function AddNewGroup(props) {
  const [name, setname] = useState("");

  const handleSubmit = (event)=> { 
    event.preventDefault(); 
    props.handleSubmit(name)
  } 

  const button = {
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '15px',
    color: 'white',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
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
      <button type="submit" style={button}>Add New Group</button>
    </form>
  );
}


export default AddNewGroup;
