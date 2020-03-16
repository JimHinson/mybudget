import React, { useState } from "react";
import "../styles/monthly.css";
import "../styles/App.css";
import { Button, Segment, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function AddBudgetItem(props) {
  const [budgetItem, setbudgetItem] = useState("");
  const [amount, setamount] = useState(0);

  const handleSubmit = (event)=> { 
    event.preventDefault(); 
    setamount(0)
    setbudgetItem("")
    props.handleSubmit(budgetItem, amount)
  } 
 


  return (
    <form onSubmit={handleSubmit} className="formBody">
      <Input
        type="text"
        id="budgetItem"
        className="input"
        value={budgetItem}
        onChange={e => setbudgetItem(e.target.value)}
        placeholder="budget item"
        required
      />

      <Input
        type="text"
        id="amount"
        className="input"
        value={amount}
        onChange={e => setamount(e.target.value)}
        placeholder="amount"
        icon='dollar sign' iconPosition='left'
        pattern="[0-9.]+"
        required
        
      />
      {/* <button className="myBtn" type="submit">Submit</button> */}
      <Button primary type="submit" data-selected="true" data-label-id="0">Submit</Button>
    </form>
  );
}


export default AddBudgetItem;
