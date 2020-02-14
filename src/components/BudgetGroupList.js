import React from "react";
import "../styles/monthly.css";

function BudgetGroupList(props) {

//   const handleDelete = ()=> {
//   props.deleteItem(props.index)
//  } 
console.log('props is here', props)


const budgetGroupTotal = (index) => {
   
    var currentItems = props.budgetData.items
    return currentItems.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  const expenseStyle = {
    color: 'white', 
    backgroundColor: 'red'
  }
  return (
      <div>


  <hr />
          <div className="budget__income clearfix" style={expenseStyle}>
      <div className="budget__income--text" style={expenseStyle}>{props.budgetData.title}</div>
      <div className="right">
        <div className="budget__income--value">${budgetGroupTotal()}</div>
        <div className="budget__income--percentage">&nbsp;</div>
        {/* <button index={props.index} onClick={handleDelete}>Delete</button> */}
      </div>
      
    </div>
      </div>
    
  );
}

export default BudgetGroupList;
