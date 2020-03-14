import React, {useEffect} from 'react';
import '../styles/monthly.css';
import '../styles/App.css';
import AddTransaction from '../components/AddTransaction';
import { Button, Divider } from 'semantic-ui-react';

function ItemTransactionList (props) {
  const expenseStyle = {
    color: 'white',
    backgroundColor: 'red',
  };

  const cardStyle = {
    boxShadow: '20px 26px 38px 20px rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '35%',
    border: '5px solid black',
    position: 'absolute',
    top: '438px',
    right: '16px',
    fontSize: '18px',
    marginTop: '100px',
  };

  const transactionTotal = () => {
    var currentexpenses =
      props.budgetGroupValue[props.rowValue.groupIndex].expenses[
        props.rowValue.itemIndex
      ].transactions;
    return currentexpenses.reduce (
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0 // initial accumulator value
    );
  };

  const handleDelete = (index, name) => {
    console.log (index, 'I clicked delete transaction', name);
  };

  useEffect (() => {
    if (!props.rowValue.itemIndex) {
      console.log('rowbalue not ', props.rowValue)
      return;
    };
    if (!props.rowValue.groupIndex) {
      console.log('rowbalue not22 ', props.rowValue)
      return;
    };
    if(props.budgetGroupValue[props.rowValue.groupIndex].expenses.length > 0){
      console.log('rowbalue not333 ', props.rowValue)
      return;
    }
    return () => {};
  }, [props.budgetGroupValue]);

  return (
    <div>
      <div data-tut="reactour__transactionContainer" className="col transctioncol" style={cardStyle}>
        <div className="budget__income1 clearfix ui dividing header">
          <hr />
          <div className="budget__income--value bold">Transactions</div>
          <div className="right">
            <div className="budget__income--value bold">Amount</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
          {/* <Divider/> */}
        </div>
        <hr />
        <div> 
      {props.budgetGroupValue[props.rowValue.groupIndex].expenses[
              props.rowValue.itemIndex
            ] ? 
          <div>
            {props.budgetGroupValue[props.rowValue.groupIndex].expenses[
              props.rowValue.itemIndex
            ].transactions.map ((transaction, index) => (
              <div className="budget__income1 " key={index}>
                <hr />
                <div className="budget__income--value">
                  {transaction.name.toUpperCase ()}
                </div>
                <div className="right">
                  <div className="budget__income--value">
                    {transaction.amount}
                  </div>
                  <div className="budget__income--percentage">&nbsp;</div>
                </div>

                <Button
                
                color='youtube'
                  index={props.index}
                  className="white "
                  onClick={() =>
                    props.handleTransactionDelete (
                      props.rowValue.groupIndex,
                      props.rowValue.itemIndex,
                      index,
                      transaction.name
                    )}
                >
                  Delete
                </Button>
              </div>
            ))}

            <div className="ui large label">
              Add A Transaction
              <AddTransaction
                handleTransactionSubmit={props.handleTransactionSubmit}
              />
            </div>
            <div style={expenseStyle}>
              Total: {transactionTotal (props.rowValue.index)}{' '}
            </div>
          </div>

          : 
          <div> Add Expenses to see transactions</div>
    }
         
        </div>
      </div>

    </div>
  );
}

export default ItemTransactionList;
