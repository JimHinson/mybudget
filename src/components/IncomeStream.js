import React from 'react';
import '../styles/monthly.css';
import { Button, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
function IncomeStream (props) {
  const handleDelete = () => {
    props.deleteIncome (props.index);
  };
  return (
    <div className="budget__income clearfix">
      <div className="budgetIncome">{props.paycheck}</div>
      <div className="right">
        <div className="budgetIncome">{props.amount}</div>
        <div className="budget__income--percentage">&nbsp;</div>
        <Button color="youtube" index={props.index} onClick={handleDelete}>Delete</Button>
      </div>

    </div>
  );
}

export default IncomeStream;
