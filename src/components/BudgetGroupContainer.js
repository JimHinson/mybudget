import React, { useState, useEffect } from 'react'
import '../styles/monthly.css'
import '../styles/App.css'
import BudgetGroup from './BudgetGroup'
import AddNewGroup from './AddNewGroup'

function BudgetGroupContainer() {
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

  const BudgetGroupContainer = {
    listStyleType: 'none',
    border: '1px solid black',
    marginBotton: '20px'
    // backgroundColor: '#333'
  }

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

  const handleItemDelete = (groupIndex, itemIndex) => {
    console.log(groupIndex, budgetGroupValue[groupIndex].items, 'Im in bgc and I see index', itemIndex)
    // setBudgetGroupValue(budgetGroupValue.splice(budgetGroupValue[groupIndex].items, 1));

    setBudgetGroupValue(prevBudgetGroupValue => {
      return [
        ...prevBudgetGroupValue[groupIndex].items.splice(itemIndex, 1),
        ...prevBudgetGroupValue
      ]
    })
    console.log('its temp here with ', budgetGroupValue)
    
  }


  useEffect(() => {
    return () => {}
  }, [budgetGroupValue])


  const addGroupName = (name) => {
    setBudgetGroupValue([...budgetGroupValue, {
      title: name,
      totolAmount: 0,
      items: [],
    }])
  }

  return (
    <div style={BudgetGroupContainer}>
      {budgetGroupValue.map((budgetObject, index) => (
        <BudgetGroup
          key={index}
          budgetData={budgetObject}
          // budgetTotal={budgetGroupTotal()}
          index={index}
          handleSubmit={handleFormSubmit}
          handleDelete={handleItemDelete}
        />
      ))}
      <AddNewGroup className="myBtn" handleSubmit={addGroupName} />
    </div>
  )
}

export default BudgetGroupContainer
