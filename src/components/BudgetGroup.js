import React from 'react';
import '../styles/monthly.css';
import '../styles/App.css';
import { Button, Divider, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AddBudgetItem from './AddBudgetItem';
import BudgetItemList from './BudgetItemList';

function BudgetGroup (props) {
  const cHeader = {
    color: '#111',
    fontFamily: 'Helvetica Neue',
    fontSize: ' 25px',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    lineHeight: '1',
    textAlign: 'center',
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

  const itemClickHandler = (isShown, index, name, amount) => {
    props.handleItemClick (isShown, index, name, amount, props.index);
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
              <h1 style={cHeader}>
                {' '}{props.budgetData.title} ${budgetGroupTotal ()}{' '}
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
                {Object.keys (props.budgetData.expenses).map ((name, index) => (
                  <li style={liStyle} key={name + index}>
                    
                    <BudgetItemList
                      key={name + index}
                      amount={props.budgetData.expenses[name].amount}
                      name={props.budgetData.expenses[name].name}
                      expenseID={props.budgetData.expenses[name].id}
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
