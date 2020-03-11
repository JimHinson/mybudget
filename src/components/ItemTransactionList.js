import React, {useEffect}from "react";
import "../styles/monthly.css";
import "../styles/App.css"
import AddTransaction from "../components/AddTransaction"

function ItemTransactionList(props) {


  const expenseStyle = {
    color: 'white', 
    backgroundColor: 'red'
  }

  const cardStyle = {
    boxShadow: '20px 26px 38px 20px rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '35%',
    border: '5px solid black',
    position: 'absolute',
    top: '438px',
    right: '16px',
    fontSize: '18px',
    marginTop: '100px'
  }


  const transactionTotal = () => {
   
    var currentexpenses = props.budgetGroupValue[props.rowValue.groupIndex].expenses[props.rowValue.itemIndex].transactions
    return currentexpenses.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  const handleDelete = (index, name) => {
    console.log(index,'I clicked delete transaction', name)
  }

// console.log('item transaction list',props )
useEffect(() => {
  if(!props.rowValue.itemIndex) return;
  if(!props.rowValue.groupIndex) return;
  // if(!props.budgetGroupValue[props.rowValue.groupIndex].expenses[props.rowValue.itemIndex].transactions){
  //   console.log('we have no more groups')
  // }
  return () => {
  
    // document.removeEventListener('mousedown', handleClickHandlerU);
  };
}, []);

  return (
      <div>
                <div className="col transctioncol" style={cardStyle}>
          <div className="budget__income1 clearfix">
            <hr />
            <div className="budget__income--value bold">Transactions</div>
            <div className="right">
              <div className="budget__income--value bold">Amount</div>
              <div className="budget__income--percentage">&nbsp;</div>
            </div>
          </div>
          <hr />
          <div  >
          
              <div >
              {/* {console.log(props.rowValue,'I can see it here',props.rowValue.itemIndex,  props.budgetGroupValue)} */}
              {props.budgetGroupValue[props.rowValue.groupIndex].expenses[props.rowValue.itemIndex].transactions.map((transaction, index) => (
                //  props.budgetGroupValue[index].expenses.map((item, index2) => (
                //  item.transactions.map((transactions, index3) => (

                
                <div className="budget__income1 " key={index} >
                  <hr />
                  {/* <div  className="budget__income--value">{console.log('bINFO', transaction, 'index2', index,  'index3')}</div> */}
                  <div  className="budget__income--value">{transaction.name.toUpperCase()}</div>
                 
                  <div className="right">
                    <div className="budget__income--value">{transaction.amount}</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                  </div>
                  

                  <button
          index={props.index}
          className="myBtn deleteBtn flex-itemExpense"
          // onClick={handleDelete}
          onClick={() => props.handleTransactionDelete(props.rowValue.groupIndex, props.rowValue.itemIndex, index, transaction.name)}
        >
          Delete
        </button>
                </div>
                // ))
                // ))

                
                ))}
                
                  <div>
                    Add A Transaction <AddTransaction handleTransactionSubmit={props.handleTransactionSubmit} ></AddTransaction>
                    </div> 
                <div style={expenseStyle}>Total:  {transactionTotal(props.rowValue.index)} </div>
              </div>
             

          </div>
        </div>

      </div>
    
  );
}

export default ItemTransactionList;
