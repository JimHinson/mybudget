import React, {useState} from 'react';
import '../styles/monthly.css';
import '../styles/App.css';
import {Button, Input} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function AddNewGroup (props) {
  const [name, setname] = useState ('');

  const handleSubmit = event => {
    event.preventDefault ();
    props.handleGroupSubmit (name);
    setname ('');
  };

  const border = {
    border: 'solid 2px black', 
    borderRadius: '9px',
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <div data-tut="reactour__logo">
        <Input
          type="text"
          id="name"
          className="input"
          value={name}
          onChange={e => setname (e.target.value)}
          placeholder="Add Budget Category"
          style={border}
        />

        <Button type="submit" primary className="myBtn">
          Add Budget Category
        </Button>

      </div>
    </form>
  );
}

export default AddNewGroup;
