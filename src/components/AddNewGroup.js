import React, { useState } from "react";
import "../styles/monthly.css";
import "../styles/App.css"
import { Button, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function AddNewGroup(props) {
  const [name, setname] = useState("");

  const handleSubmit = (event)=> { 
    event.preventDefault(); 
    props.handleGroupSubmit(name)
    setname('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="name"
        className="input"
        value={name}
        onChange={e => setname(e.target.value)}
        placeholder="Group Name"
      />
      <Button type="submit" primary className="myBtn">Add New Group</Button>
    </form>
  );
}


export default AddNewGroup;
