import React from 'react'
import '../styles/monthly.css'
import '../styles/App.css'
import BudgetGroup from './BudgetGroup'
import AddNewGroup from './AddNewGroup'

function BudgetGroupContainer(props) {
  const BudgetGroupContainer = {
    listStyleType: 'none',
    border: '1px solid black',
    marginBotton: '20px',
    marginTop: '10px',
    // backgroundColor: '#333'
  }

  const handleFormSubmit = (name, amount, index) => {
    props.handleSubmit(name, amount, index)
  }

  const addGroupNameHandler = name => {
    props.handleGroupSubmit(name)
  }

  const deleteItem = (groupIndex, index) => {
    console.log(
      groupIndex,
      'ground index and indfex in budgetgroup container',
      index,
    )
    props.handleDeleteItem(groupIndex, index)
  }

  const handleGroupDelete = index => {
    console.log('groud index in budgetgroup container', index)
  }

  return (
    <div style={BudgetGroupContainer}>
      {props.budgetGroupValue.map((budgetObject, index) => (
        <div>
          <div>
                   </div>

          <div>
          <button index={index} onClick={handleGroupDelete}>Delete</button>
            <BudgetGroup
              key={index}
              budgetData={budgetObject}
              // budgetTotal={budgetGroupTotal()}
              index={index}
              handleSubmit={handleFormSubmit}
              handleDeleteItem={deleteItem}
            />
          </div>
        </div>
      ))}
      <AddNewGroup className="myBtn" handleGroupSubmit={addGroupNameHandler} />
    </div>
  )
}

export default BudgetGroupContainer
