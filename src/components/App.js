import React, { useState, useEffect } from 'react'

import '../styles/App.css'
import MonthlyIncome from './MonthlyIncome'
import BudgetGroupContainer from './BudgetGroupContainer'
import BudgetGroupList from './BudgetGroupList'

function App() {
  const [incomes, setincomes] = useState([
    { paycheck: 'Webassign', amount: 500 },
    { paycheck: 'Investment', amount: 100 },
  ])
  const goodMoney = {
    color: 'white', 
    backgroundColor: 'green'
  }

  const center = {
    margin:'auto',
    textAlign: 'center',
    width:'100%',
    borderRadius:'50%',
    textAlign:'center',
    fontSize: '48px',
    padding:'50% 0',
    lineHeight:'2.5',
    position:'relative',
  }
  const circleStyle = {
    height: '125px',
    width: '125px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'inline-block',
    border: '5px solid black',
  }
  const [budgetGroupValue, setBudgetGroupValue] = useState([
    {
      title: 'Food',
      totolAmount: 300,
      items: [
        { name: 'item1', amount: 40 },
        { name: 'item2', amount: 10 },
      ],
    },
  ])

  // code for income area
  const handleChangeIncome = (paycheck, amount) => {
    setincomes([...incomes, { paycheck, amount: Number(amount) }])
  }

  const handleDeleteIncome = index => {
    const tempIncome = [...incomes]
    tempIncome.splice(index, 1)
    setincomes(tempIncome)
  }

  const finalTotal = () => {
    return incomes.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  // code for budget container
  const handleFormSubmit = (name, amount, index) => {
    setBudgetGroupValue(prevBudgetGroupValue => {
      return [
        ...prevBudgetGroupValue.slice(0, index),
        {
          ...prevBudgetGroupValue[index],
          items: [
            ...prevBudgetGroupValue[index].items,
            { name, amount: Number(amount) },
          ],
        },
        ...prevBudgetGroupValue.slice(index + 1),
      ]
    })
  }

  // useEffect(() => {
  //   return () => {}
  // }, [budgetGroupValue])

  const addGroupName = name => {
    setBudgetGroupValue([
      ...budgetGroupValue,
      {
        title: name,
        totolAmount: 0,
        items: [],
      },
    ])
  }


  const handleDeleteItem = (groupIndex, index) => {
    console.log( budgetGroupValue[groupIndex], `items is delted ${groupIndex, index}in groups in appsJS`,  budgetGroupValue[groupIndex].items[index])
    // setBudgetGroupValue(prevBudgetGroupValue => {
    //   return [
    //     ...prevBudgetGroupValue.slice(0, groupIndex),
    //     {
    //       ...prevBudgetGroupValue[groupIndex],
    //       items: [
    //         ...prevBudgetGroupValue[groupIndex].items.splice(groupIndex, 1)
    //       ],
    //     },
    //     // ...prevBudgetGroupValue.slice(index + 1),
    //   ]
    // })
  }

  return (
    <div className="App">
      <MonthlyIncome
        incomes={incomes}
        finalTotal={finalTotal}
        changeIncome={handleChangeIncome}
        deleteIncome={handleDeleteIncome}
      />

      <hr></hr>
      <div className="flex-grid">
        <div className="col major">
          <BudgetGroupContainer
          budgetGroupValue={budgetGroupValue}
          handleSubmit={handleFormSubmit}
          handleGroupSubmit={addGroupName}
          handleDeleteItem={handleDeleteItem}
        />
        </div>
        <div className="col">

<header>
    <h1>Budget Group List</h1>
  </header>
  <hr />
  
<h3 style={goodMoney}>Total Budget: ${finalTotal()}</h3>
<div style={circleStyle}>
  
   <span style={center}> 600</span>
   
   </div>
        {budgetGroupValue.map((budgetInfo, index) => (
          
          <BudgetGroupList
           key={budgetInfo.title}
           budgetData={budgetInfo}
           finalAmountForGroup={finalTotal}
           index={index}
           key={budgetInfo.title}
          />
        ))}
        
        </div>
      </div>
    </div>
  )
}

export default App
