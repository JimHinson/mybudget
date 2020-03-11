import React, {} from 'react'
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
    console.log('props', props)
    props.handleGroupSubmit(name)
  }

  const deleteItem = (groupIndex, index) => {
    // console.log(
    //   groupIndex,
    //   'ground index and indfex in budgetgroup container',
    //   index,
    // )
    props.handleDeleteItem(groupIndex, index)
  }

  const handleGroupDelete = index => {
    // console.log('groud index in budgetgroup container', index)
    props.handleGroupDelete(index)
  }

  const handleItemClick = (isShown, index, name, amount, groupIndex) => {
      if(props.budgetGroupValue[groupIndex].expenses[index]){
        console.log('O saw the item',!props.budgetGroupValue[groupIndex].expenses[index] )
      }
      else {
        console.log('00I saw saw the item',props.budgetGroupValue[groupIndex].expenses[index] )
        handleGroupDelete(groupIndex)
      }
    props.handleItemClick(isShown, index, name, amount,groupIndex )
  }
  return (
    <div style={BudgetGroupContainer}>
      {props.budgetGroupValue.map((budgetObject, index) => (
        <div key={index}>
          <div>
      <button  
        index={index} onClick={(e) => handleGroupDelete(index)} className="myBtn deleteBtn" >Delete {budgetObject.title} Group</button>
           
           

            <BudgetGroup
              key={index}
              budgetData={budgetObject}
              index={index}
              handleSubmit={handleFormSubmit}
              handleDeleteItem={deleteItem}
              handleItemClick={handleItemClick}

            />
          </div>
        </div>
      ))}
      <AddNewGroup className="myBtn" handleGroupSubmit={addGroupNameHandler} />
    </div>
  )
}

export default BudgetGroupContainer
