import React, {useEffect} from 'react';
import '../styles/monthly.css';
import '../styles/App.css';
import BudgetGroup from './BudgetGroup';
import AddNewGroup from './AddNewGroup';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function BudgetGroupContainer (props) {
  const BudgetGroupContainer = {
    listStyleType: 'none',
    border: '1px solid black',
    marginBotton: '20px',
    marginTop: '10px',
  };

  const handleFormSubmit = (name, amount, index) => {
    props.handleSubmit (name, amount, index);
  };

  const addGroupNameHandler = name => {
    props.handleGroupSubmit (name);
  };

  const deleteItem = (groupIndex, index) => {
    if (props.budgetGroupValue[groupIndex].expenses.length > 0) {
      props.handleDeleteItem (groupIndex, index);
    } else if (props.budgetGroupValue[groupIndex].expenses.length < 1) {
      props.handleGroupDelete (groupIndex);
    }
  };

  const handleItemClick = (
    isShown,
    index,
    name,
    amount,
    groupIndex,
    anotherindex
  ) => {
    props.handleItemClick (isShown, index, name, amount, groupIndex);
  };

  return (
    <div style={BudgetGroupContainer} data-tut="reactour__itemList">

      {props.budgetGroupValue.map ((budgetObject, index) => (
        <div key={index}>
          <div>
            <div>
              <Button
                data-tut="reactour__deleteGroup"
                index={index}
                onClick={e => props.handleGroupDelete (index)}
                className=""
                color="youtube"
              >
                Delete {budgetObject.title} Group
              </Button>

            </div>

            <BudgetGroup
              key={index}
              budgetGroupValue={props.budgetGroupValue}
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
  );
}

export default BudgetGroupContainer;
