import React, { useState, useEffect } from "react";
import "../styles/monthly.css";
import PayCheckForm from "./PayCheckForm";
import IncomeStream from "./IncomeStream";
import AddBudgetItem from "./AddBudgetItem";
import BudgetItemList from "./BudgetItemList"
import BudgetGroup from "./BudgetGroup";

function BudgetGroupContainer() {
  const [budgetGroupValue, setBudgetGroupValue] = useState([{ title: "Food", totolAmount: 300,  items: [{ name: 'item1', amount: 40 }, { name: 'item2', amount: 10 }] }]);
  const [isAddClicked, setisAddClicked] = useState(false)
  const divStyle = {
    margin: '10px',
    border: '5px solid pink'
  };
  const liStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };

  const containerStyle = {
      listStyleType: 'none',
      border: '2px solid black',
      // backgroundColor: '#333'
  }
  const BudgetGroupContainer = {
    listStyleType: 'none',
    border: '5px solid red',
    // backgroundColor: '#333'
}

const addButtonStyle = {
    backGroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    color:'black'

}

  const handleFormSubmit = (name, amount) => {
     console.log('mname', name, 'amiunt', amount)
     var index = 0
     console.log('its the final', budgetGroupTotal())
     setBudgetGroupValue(prevBudgetGroupValue => {
      return [ ...prevBudgetGroupValue.slice(0, index), {...prevBudgetGroupValue[index], items: [...prevBudgetGroupValue[index].items, {name, amount: Number(amount)}] }, ...prevBudgetGroupValue.slice(index+1)];
    });
    console.log('things changed',budgetGroupValue)
    //  setBudgetGroupValue([...budgetGroupValue[0].items, {name, amount: Number(amount) }]);
  };

  const budgetGroupTotal = () => { 
    var currentItems = budgetGroupValue[0].items
    return currentItems.reduce((totalIncome, currentIncome) =>     
      totalIncome + currentIncome.amount, // reducer function
      0 // initial accumulator value
    );
  }


  const getTotalFromGroup = (index) => {
    console.log(index, 'trying to delete', Array.isArray(budgetGroupValue[0].items),  budgetGroupValue[0].items)
    // setBudgetGroupValue(
      // budgetGroupValue[0].items.filter(item => item.name != 'item2')
      // budgetGroupValue[0].items.splice(0, 1)
      // budgetGroupValue[0].items.filter((x,i) =>  x.name != "item2") 
      // setBudgetGroupValue([...budgetGroupValue[0].items])
      // );
  };

  useEffect(() => {
    console.log(budgetGroupValue)
    return () => {
    };
  }, [budgetGroupValue])

  const addGroup = () => {
   setisAddClicked(true)
  };

  return (
    <div style={BudgetGroupContainer}>

    {console.log('is clicked', typeof budgetGroupValue)}
    {/* {isAddClicked && <BudgetGroup/> } */}

    {/* <button style={addButtonStyle} onClick={addGroup}>Button</button> */}
    {budgetGroupValue.map((budgetObject, index) => (
<BudgetGroup
key={index}
budgetData={budgetObject}
budgetTotal={budgetGroupTotal()}
index={index}
handleSubmit={handleFormSubmit}
/>
    ))}

    </div>
  );
}


export default BudgetGroupContainer;
