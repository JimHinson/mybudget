import React, { useState } from 'react';
import '../styles/monthly.css';
import '../styles/App.css';


function BudgetItemList(props) {

  const [isShown, setIsShown] = useState(false);
 

  const handleDelete = () => {
    props.deleteItem(props.index);
  };
  // const handleEvent = (event) => {
  //   console.log('isshow', isShown,  'and', !isShown)
  //   // if (event.type === "mousedown") {
  //     setIsShown(!isShown)
  //     //  } else {
  //       // setIsShown(true)
  //     //  }
  //  }


  const calc = (index) => {
  
    return getTotal();
  }



  const getTotal = () => {
  //  console.log('budggg', props.budgetData.expenses[props.index].transactions,  props.budgetData.expenses[props.index].transactions)
    return props.budgetData.expenses[props.index].transactions.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  const handleClickHandler = (e) => {
    props.handleItemClick(!isShown, props.index, props.name, props.amount);
  };

  // useEffect(() => {
  //   // add when mounted
  //   document.addEventListener('mousedown', handleClickHandlerD);
  //   // return function to be called when unmounted
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickHandlerU);
  //   };
  // }, []);

  return (
    <div>
      <hr/>
      <div className="flex-containerExpense" onClick={handleClickHandler}>
        <div className=" flex-itemExpense">
          {props.name}
        </div>
        <div className=" flex-itemExpense ">
          {props.amount}
        </div>
        <div className=" flex-itemExpense ">{calc()}</div>
          <button
          index={props.index}
          className="myBtn deleteBtn flex-itemExpense"
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          // index={props.index}
          // className="myBtn deleteBtn flex-itemExpense"
          // onClick={handleDelete}
          className="myBtn"
        >
          Add transactions
        </button>
      </div>
    </div>
  );
}

export default BudgetItemList;
