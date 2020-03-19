import React, {useState} from 'react';
import '../styles/monthly.css';
import '../styles/App.css';
import {Button, Input} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function AddBudgetItem (props) {
  const [budgetItem, setbudgetItem] = useState ('');
  const [amount, setamount] = useState (0);

  const handleSubmit = event => {
    event.preventDefault ();
    setamount (0);
    setbudgetItem ('');
    props.handleSubmit (budgetItem, amount);
  };

  const border = {
    border: 'solid 2px black', 
    borderRadius: '9px',
  }


  return (
    <form onSubmit={handleSubmit} className="formBody" data-tut="reactour__transactionList">
      <Input
        type="text"
        id="budgetItem"
        className="input"
        style={border}
        value={budgetItem}
        onChange={e => setbudgetItem (e.target.value)}
        placeholder="budget item"
        required
      />

      <Input
        type="text"
        id="amount"
        className="input"
        style={border}
        value={amount}
        onChange={e => setamount (e.target.value)}
        placeholder="amount"
        icon="dollar sign"
        iconPosition="left"
        pattern="[0-9.]+"
        required
      />
      {/* <button className="myBtn" type="submit">Submit</button> */}
      <Button primary type="submit" data-selected="true" data-label-id="0">
        Submit
      </Button>
    </form>
  );
}

export default AddBudgetItem;
