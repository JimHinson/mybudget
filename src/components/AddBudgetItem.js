import React, { useState } from "react";
import "../styles/monthly.css";

function AddBudgetItem(props) {
  const [budgetItem, setbudgetItem] = useState("");
  const [amount, setamount] = useState(0);

  const handleSubmit = (event)=> { 
    event.preventDefault(); 
    setamount(0)
    setbudgetItem("")
    props.handleSubmit(budgetItem, amount)
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
    <form onSubmit={handleSubmit} className="formBody">
      <input
        type="text"
        id="budgetItem"
        className="input"
        value={budgetItem}
        onChange={e => setbudgetItem(e.target.value)}
        placeholder="budget item"
      />

      <input
        type="number"
        id="amount"
        className="input"
        value={amount}
        onChange={e => setamount(e.target.value)}
        placeholder="amount"
      />
      <button style={button} type="submit">Submit</button>
    </form>
  );
}


export default AddBudgetItem;
