import React, {} from 'react';
import '../styles/monthly.css';
import '../styles/App.css';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import AddBudgetItem from './AddBudgetItem';
import BudgetItemList from './BudgetItemList';

function BudgetGroup (props) {
  const cHeader = {
    // color: '#111',
    color: '#fffffff2',
    fontFamily: 'Helvetica Neue',
    fontSize: ' 25px',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    lineHeight: '1',
    textAlign: 'center',
    marginTop: '16px',
    border: '4px solid white',
    borderRadius: '90px',
    backgroundColor: '#475245',
    
  };
  const divStyle = {
    margin: '10px',
    border: '5px solid #333',
  };

  const hrStyle = {
    border: 'none',
    height: '3px',
    backgroundColor: '#333',
    fontWeight: 'bold',
  };
  const liStyle = {
    fontSize: '15px',
    textAlign: 'center',
  };

  const containerStyle = {
    listStyleType: 'none',
    border: '2px solid black',
    marginBotton: '20px',
  };
  const spacingStyle = {
    paddingLeft: '10px',
  }

  const handleFormSubmit = (name, amount, index) => {
    props.handleSubmit (name, amount, props.index);
  };

  const budgetGroupTotal = index => {
    if (!props.budgetData.expenses) return;
    var currentexpenses = props.budgetData.expenses;
    return currentexpenses.reduce (
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0 // initial accumulator value
    );
  };

  const handleItemDelete = index => {
    props.handleDeleteItem (props.index, index);
  };

  const itemClickHandler = (isShown, index, name, amount, groupIndex) => {
    props.handleItemClick (
      isShown,
      index,
      name,
      amount,
      props.index,
      groupIndex
    );
  };
  return (
    <div className="budgetGroup">
      <div style={containerStyle}>
        <div className="budgetList">
          <div className="budget__ti">
            <span className="budget__ti" />
          </div>
          <div className="budget__v" />
          <ul>
            <li>
              <h1 style={cHeader} className='ui header'>
                {props.budgetData.title} <span style={spacingStyle}></span>  ${budgetGroupTotal ()}
              </h1>
              <ul style={divStyle} className="striped-list">

                <div className="flex-container">

                  <div className="flex-itemExpense">Expense</div>
                  <div className=" flex-itemExpense">Planned</div>
                  <div className=" flex-itemExpense">Remaining</div>
                  <div className=" flex-itemExpense">Actions</div>
                  <hr />
                </div>
                <hr style={hrStyle} />

                {Object.keys (
                  props.budgetData.expenses
                ).map ((expenseIndex, index) => (
                  <li style={liStyle} key={expenseIndex + index}>

                    <BudgetItemList
                      key={expenseIndex + index}
                      amount={props.budgetData.expenses[expenseIndex].amount}
                      name={props.budgetData.expenses[expenseIndex].name}
                      budgetData={props.budgetData}
                      index={index}
                      groupIndex={props.index}
                      deleteItem={handleItemDelete}
                      handleItemClick={itemClickHandler}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <AddBudgetItem handleSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default BudgetGroup;
