import React, {useState, useEffect} from 'react';
import '../styles/monthly.css';
import '../styles/App.css';
import { Button, Divider, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function BudgetItemList (props) {
  const [isShown, setIsShown] = useState (false);

  const liStyle = {
    fontSize: '18px',
    textAlign: 'center',
  };
  

  const handleDelete = () => {
    props.deleteItem (props.index);
  };
  const plannedMinusRemaining = index => {
    var t =
      props.budgetData.expenses[props.index].amount - getTransactionTotal ();
    return t;
  };

  const getTransactionTotal = () => {
    if (!props.budgetData.expenses[props.index].transactions) {
      return 0;
    }

    return props.budgetData.expenses[props.index].transactions.reduce (
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0 // initial accumulator value
    );
  };

  const handleClickHandler = e => {
    props.handleItemClick (
      !isShown,
      props.index,
      props.name,
      props.amount,
      props.groupIndex
    );
  };

  return (
    <div>
      <hr />
      <div className="flex-containerExpense" onClick={handleClickHandler}>
        <div className=" flex-itemExpense " style={liStyle}>
          {props.name}
        </div>
        <div className="flex-itemExpense " style={liStyle}>
          {props.amount}
        </div>
        <div className="flex-itemExpense " style={liStyle}>{plannedMinusRemaining ()}</div>
        <Button
          index={props.index}
          className="myBtn deleteBtn flex-itemExpense" style={liStyle}
          onClick={handleDelete}
        >
          Delete
        </Button>

    
      </div>
    </div>
  );
}

export default BudgetItemList;
