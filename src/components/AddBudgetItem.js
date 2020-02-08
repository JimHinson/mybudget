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
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="budgetItem"
        className="input"
        value={budgetItem}
        onChange={e => setbudgetItem(e.target.value)}
        placeholder="budget item"
      />

      <input
        type="text"
        id="amount"
        className="input"
        value={amount}
        onChange={e => setamount(e.target.value)}
        placeholder="amount"
      />
      <button type="submit">Submit</button>
    </form>
  );
}


export default AddBudgetItem;
