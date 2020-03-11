import React, { useState, useEffect } from 'react';
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


  const plannedMinusRemaining = (index) => {
    
    // if(!props.index) return props.budgetData.expenses[0].amount; 
    // console.log('This is the total from budgeitemlist', getTransactionTotal())
    // console.log('this is from budgetitems list props', props.budgetData.expenses[props.index].amount)
    var t = props.budgetData.expenses[props.index].amount  - getTransactionTotal() 
    // console.log(  typeof props.budgetData.expenses[props.index].amount ,  props.budgetData.expenses[props.index].amount ,  typeof getTransactionTotal(), getTransactionTotal(), 'I see T', t, )
    return t;
  }



  const getTransactionTotal = () => {
  //  console.log( 'props.budgetData.expenses[props.index].transactions', typeof props.budgetData.expenses[props.index].amount)
   if(!props.budgetData.expenses[props.index].transactions)
   {
    return 0;
   }  
  //  else if(props.budgetData.expenses[props.index].transactions == undefined) {
  //    let amount =  Number(props.budgetData.expenses[props.index].amount) 
  //       return amount; 
  //  }
   


    return props.budgetData.expenses[props.index].transactions.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  const handleClickHandler = (e) => {
    props.handleItemClick(!isShown, props.index, props.name, props.amount, props.groupIndex);
    // props.handleClick(isShown, props.index, props.name, props.amount)
  };

  // useEffect(() => {
  //   console.log('props from item list', props.transaction)
  //   // add when mounted
  //   // document.addEventListener('mousedown', handleClickHandlerD);
  //   // return function to be called when unmounted
  //   return () => {
  //     // document.removeEventListener('mousedown', handleClickHandlerU);
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
        <div className=" flex-itemExpense ">{plannedMinusRemaining()}</div>
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
