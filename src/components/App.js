import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import MonthlyIncome from './MonthlyIncome';
import BudgetGroupContainer from './BudgetGroupContainer';
import BudgetGroupList from './BudgetGroupList';
import ItemTransactionList from './ItemTransactionList';
import { Button, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function App () {
  const [incomes, setincomes] = useState ([
    {paycheck: 'Webassign', amount: 500},
    {paycheck: 'Investment', amount: 100},
  ]);
  const [budgetGroupValue, setBudgetGroupValue] = useState ([
    {
      title: 'Food',
      expenses: [
        {
          id: 0,
          name: 'Groceries',
          amount: 300,
          transactions: [
            {
              name: 'walmart',
              amount: 40,
            },
            {
              name: 'aldi',
              amount: 50,
            },
            {
              name: 'taco',
              amount: 25,
            },
          ],
        },

        {
          id: 1,
          name: 'Restaurant',
          amount: 150,
          transactions: [
            {
              name: 'BJs',
              amount: 200,
            },
          ],
        },
        {
          id: 2,
          name: 'snacks',
          amount: 10,
          transactions: [
            {
              name: 'Sheetz',
              amount: 200,
            },
          ],
        },
      ],
    },
    {
      title: 'Car Maintainance',
      expenses: [
        {
          id: 0,
          name: 'Car repair ',
          amount: 200,
          transactions: [
            {
              name: 'tires',
              amount: 40,
            },
            {
              name: 'oil change',
              amount: 50,
            },
          ],
        },

        {
          id: 1,
          name: 'Alternator',
          amount: 70,
          transactions: [
            {
              name: 'Part',
              amount: 30,
            },
            {
              name: 'Labor',
              amount: 20,
            },
          ],
        },
      ],
    },
  ]);
  const [showTractionList, setshowTractionList] = useState (false);
  const [showBudgetGroupList, setshowBudgetGroupList] = useState (true);
  const [rowClickData, setrowClickData] = useState ();
  const [transaction, settransaction] = useState ([]);

  const transactionStyle = {
    marginTop: '230px',
  };
  const center = {
    margin: 'auto',
    textAlign: 'center',
    width: '100%',
    borderRadius: '60%',
    fontSize: '49px',
    padding: '100% 5%',
    lineHeight: '1.8',
    position: 'relative',
  };
  const circleStyle = {
    height: '225px',
    width: '225px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'inline-block',
    border: '5px solid black',
    marginBottom: '30px',
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
  };
  // code for income area
  const handleChangeIncome = (paycheck, amount) => {
    setincomes ([...incomes, {paycheck, amount: Number (amount)}]);
  };

  const handleTransactionSubmit = (name, amount) => {
    // console.log('I made it here', name, amount)
    //does my category exist?
    //prefer to find by name
    //does my expense exist?
    // add transaction to the expense
    // send error if try to add a transaction to an expense that doesnt exist
    // setBudgetGroupValue()
  };

  const handleDeleteIncome = index => {
    const tempIncome = [...incomes];
    tempIncome.splice (index, 1);
    setincomes (tempIncome);
  };

  const finalTotal = () => {
    return incomes.reduce (
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0 // initial accumulator value
    );
  };

  // code for budget container
  const handleFormSubmit = (name, amount, index) => {
    setBudgetGroupValue (prevBudgetGroupValue => {
      return [
        ...prevBudgetGroupValue.slice (0, index),
        {
          ...prevBudgetGroupValue[index],
          expenses: [
            ...prevBudgetGroupValue[index].expenses,
            {name, amount: Number (amount)},
          ],

          // ...prevBudgetGroupValue[index].expenses,
          // transactions: [
          //   ...prevBudgetGroupValue[index].expenses,
          //   { name: 'transaction 1', amount: 0 },
          // ],
        },
        ...prevBudgetGroupValue.slice (index + 1),
      ];
    });
  };

  const addGroupName = name => {
    setBudgetGroupValue ([
      ...budgetGroupValue,
      {
        title: name,
        totolAmount: 0,
        expenses: [],
      },
    ]);
  };

  const handleDeleteItem = (groupIndex, index) => {
    let newBudgetGroupValue = budgetGroupValue;
    if(!newBudgetGroupValue[groupIndex]){
      console.log('the delte item does not exist', groupIndex, index, newBudgetGroupValue)
      return;
    }
    newBudgetGroupValue[groupIndex].expenses.splice (index, 1);
    setBudgetGroupValue ([...newBudgetGroupValue]);
  };

  const groupDeleteHandler = index => {
    const tempGroup = [...budgetGroupValue];
    tempGroup.splice(index, 1);
    setBudgetGroupValue(tempGroup);
  };

  const toggleTractionList = (isShown, index, name, amount, groupIndex) => {
    setrowClickData ({
      [isShown]: isShown,
      itemIndex: index,
      groupIndex: groupIndex,
    });

    setshowBudgetGroupList (previousValue => !previousValue);
    setshowTractionList (previousValue => !previousValue);
  };

  const toggleList = (isShown, index, name, amount) => {
    setrowClickData ({[isShown]: isShown, index: index});

    setshowBudgetGroupList (false);
    setshowTractionList (true);
  };
  const transactionTotal = index => {
    var currentexpenses = budgetGroupValue[0].expenses[0].transactions;
    return currentexpenses.reduce (
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0 // initial accumulator value
    );
  };

  const handleTransactionDelete = (groupIndex, itemIndex, index, name) => {
    let newBudgetGroupValue = budgetGroupValue;
    newBudgetGroupValue[groupIndex].expenses[itemIndex].transactions.splice (
      index,
      1
    );
    setBudgetGroupValue ([...newBudgetGroupValue]);
  };

  const clearBudget = () => {
    setBudgetGroupValue([])
    setincomes([])
  }

  return (
    <div className="App">
      <MonthlyIncome
        incomes={incomes}
        finalTotal={finalTotal}
        changeIncome={handleChangeIncome}
        deleteIncome={handleDeleteIncome}
        clearBudget={clearBudget}

      />

      <hr />
      <div className="flex-grid">
        <div className="col major">
          <BudgetGroupContainer
            budgetGroupValue={budgetGroupValue}
            handleSubmit={handleFormSubmit}
            handleGroupSubmit={addGroupName}
            handleDeleteItem={handleDeleteItem}
            handleGroupDelete={groupDeleteHandler}
            handleItemClick={toggleTractionList}
          />
        </div>

        {/* { budget percentage section} */}
        {showBudgetGroupList &&
          <div className="col down1">
            <div style={circleStyle}>
              <span style={center}>
                <b>Income</b> ${finalTotal ()}
              </span>
            </div>

            <div className="budget__income1 clearfix">
              <hr />
              <div className="budget__income--text">Expense</div>
              <div className="right">
                <div className="budget__income--value">Planned</div>
                <div className="budget__income--percentage">&nbsp;</div>
              </div>
            </div>
            <hr />
            <div>

              <div>
                {budgetGroupValue.map ((budgetInfo, index) => (
                  <BudgetGroupList
                    key={budgetInfo.title}
                    budgetData={budgetInfo}
                    finalAmountForGroup={finalTotal}
                    index={index}
                    totalBudget={finalTotal}
                  />
                ))}
              </div>
            </div>
          </div>}
        {showTractionList &&
          <div style={transactionStyle}>
            <ItemTransactionList
              handleTransactionDelete={handleTransactionDelete}
              budgetGroupValue={budgetGroupValue}
              rowValue={{
                itemIndex: rowClickData.itemIndex,
                groupIndex: rowClickData.groupIndex,
              }}
              handleTransactionSubmit={handleTransactionSubmit}
            />
          </div>}
      </div>
    </div>
  );
}

export default App;
