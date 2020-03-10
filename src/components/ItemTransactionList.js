import React from "react";
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


  const transactionTotal = (index) => {
   
    var currentexpenses = props.budgetGroupValue[0].expenses[index].transactions
    return currentexpenses.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

console.log('item transaction list',props )

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
              {console.log(props.rowValue,'I can see it here', props.budgetGroupValue)}
              {/* {props.budgetGroupValue[0].expenses[props.rowValue.index].transactions.map((budgetInfo, index) => ( */}
              {props.budgetGroupValue.map((budgetInfo, index) => (
                 budgetInfo.expenses.map((item, index2) => (
                 item.transactions.map((transactions, index3) => (

                
                <div className="budget__income1 clearfix" key={index} >
                  <hr />
                  <div  className="budget__income--value">{transactions.name}</div>
                  <div className="right">
                    <div className="budget__income--value">{transactions.amount}</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                  </div>
                </div>
                ))
                ))

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
