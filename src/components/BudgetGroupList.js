import React from 'react';
import '../styles/monthly.css';

function BudgetGroupList (props) {
  const budgetGroupTotal = index => {
    var currentexpenses = props.budgetData.expenses;
    return currentexpenses.reduce (
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0 // initial accumulator value
    );
  };

  const expenseStyle = {
    color: 'white',
    backgroundColor: 'red',
  };
  return (
    <div data-tut="reactour__transactionContainer">

      <hr />
      <div className="budget__income clearfix" style={expenseStyle}>
        <div className="budget__income--text" style={expenseStyle}>
          {props.budgetData.title}
        </div>
        <div className="right">
          <div className="budget__income--value">${budgetGroupTotal ()}</div>
          <div className="budget__income--percentage"> &nbsp;</div>
          <div className="budget__income--value">
            (
            {(budgetGroupTotal () / props.totalBudget () * 100).toFixed (1) +
              '%'}
            )
          </div>

        </div>

      </div>
    </div>
  );
}

export default BudgetGroupList;
