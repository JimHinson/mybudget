import React from "react";
import "../styles/monthly.css";

function IncomeStream(props) {
  const handleDelete = ()=> {
  props.deleteIncome(props.index)
 } 
  console.log("seeing ", props.paycheck, props.amount, props.index);
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">{props.paycheck}</div>
      <div className="right">
        <div className="budget__income--value">{props.amount}</div>
        <div className="budget__income--percentage">&nbsp;</div>
        <button index={props.index} onClick={handleDelete}>Delete</button>
      </div>
      
    </div>
  );
}

export default IncomeStream;