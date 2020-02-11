import React, { useState, useEffect } from 'react'
import '../styles/monthly.css'
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

  const addButtonStyle = {
    backgroundColor: '#4CAF50' /* Green */,
    border: 'none',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    color: 'black',
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

  const handleDelete = (groupIndex, itemIndex) => {
    console.log(groupIndex, 'Im in bgc and I see index', itemIndex)
    const temp = [...budgetGroupValue];

    // removing the element using splice
    temp.splice(itemIndex, 1);

    // updating the list
    setBudgetGroupValue(temp, ...budgetGroupValue)
  
    
    // setBudgetGroupValue(prevBudgetGroupValue => {
    //   return [
    //     // console.log( 'This is the prev valiue',prevBudgetGroupValue)
    //     ...budgetGroupValue[groupIndex].items.splice(itemIndex, 1),
    //     // console.log( 'This is the prev valiue',prevBudgetGroupValue)

    //     // {
    //     //   ...prevBudgetGroupValue[groupIndex],
    //     //   items: [
    //     //     ...prevBudgetGroupValue[groupIndex].items
    //     //   ],
    //     // },
    //     // ...prevBudgetGroupValue.splice(index + 1),
    //   ]
    // })
    // const name = 'item2'
    //     setBudgetGroupValue(budgetGroupValue => budgetGroupValue.filter(item => item.name !== name))
    // console.log( 'This is the prev valiue',budgetGroupValue[groupIndex].items)

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
          handleDelete={handleDelete}
        />
      ))}
      <AddNewGroup style={addButtonStyle} handleSubmit={addGroupName} />
    </div>
  )
}

export default BudgetGroupContainer
