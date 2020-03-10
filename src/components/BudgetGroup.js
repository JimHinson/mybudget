import React, { } from 'react'
import '../styles/monthly.css'
import '../styles/App.css'

import AddBudgetItem from './AddBudgetItem'
import BudgetItemList from './BudgetItemList'

function BudgetGroup(props) {
  // const [budgetGroupValue, setBudgetGroupValue] = useState([{ title: "Food", totolAmount: 300,  expenses: [{ name: 'item1', amount: 40 }, { name: 'item2', amount: 10 }] }]);
const cHeader = { color: '#111', fontFamily: 'Helvetica Neue',  fontSize:' 25px', fontWeight: 'bold', letterSpacing: '-1px', lineHeight: '1', textAlign: 'center' }
  
  
  const divStyle = {
    margin: '10px',
    border: '5px solid pink',
  }
  
  const hrStyle= {
    border: "none",
height:'3px',
    backgroundColor: '#333',
    fontWeight: 'bold'
  }
  const liStyle = {
    fontSize: '15px',
    textAlign: 'center',
  }

  const containerStyle = {
    listStyleType: 'none',
    border: '2px solid black',
    marginBotton: '20px'
    // backgroundColor: '#333'
  }

  
  const handleFormSubmit = (name, amount, index) => {
    props.handleSubmit(name, amount, props.index)
  }

  const budgetGroupTotal = (index) => {
    if(!props.budgetData.expenses) return;
  //  console.log('in budget group', props.budgetData.expenses)
    var currentexpenses = props.budgetData.expenses
    return currentexpenses.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  const handleItemDelete = (index) => {
    console.log(props.index, 'delete this item from the group in budget group ', index)
  props.handleDeleteItem(props.index, index)
  }

  const itemClickHandler = (isShown, index, name, amount) => {
    console.log('isShown in grouos', !isShown)
  props.handleItemClick(isShown, index, name, amount)
  }

  // const handleGroupDelete = (index) => {
  //   console.log('groud index in budgetgroup container', index)
  // }


  return (
    <div className="budgetGroup">
      <div style={containerStyle}>
        <div className="budgetList">
          <div className="budget__ti">
            <span className="budget__ti"></span>
          </div>
          <div className="budget__v"></div>
          <ul>
            <li>
              <h1 style={cHeader}> {props.budgetData.title} ${budgetGroupTotal()} </h1>
              <ul style={divStyle}>
           

             <div className="flex-container">
           
            <div className="flex-itemExpense">Expense</div>
            {/* <div className="right"> */}
              <div className=" flex-itemExpense">Planned</div>
              {/* <div className=" flex-itemExpense">&nbsp;</div> */}
              <div className=" flex-itemExpense" >Remaining</div>
              <div className=" flex-itemExpense" >Actions</div>
             <hr/>
            {/* </div> */}
           
          </div>
          <hr style={hrStyle}/>
              
    {console.log('in budgetgrouop seeing budgetdata', props.budgetData, props.index)}
                {Object.keys(props.budgetData.expenses).map((name, index) => (
                 
                 
                  <li style={liStyle} key={name + index}>
                    <BudgetItemList
                      key={name + index}
                      amount={props.budgetData.expenses[name].amount}
                      name={props.budgetData.expenses[name].name}
                      expenseID={props.budgetData.expenses[name].id}
                      budgetData={props.budgetData}
                      index={index}
                      deleteItem={handleItemDelete}
                      handleItemClick={itemClickHandler}
                    />
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <AddBudgetItem handleSubmit={handleFormSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default BudgetGroup
