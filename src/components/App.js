import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import MonthlyIncome from './MonthlyIncome';
import BudgetGroupContainer from './BudgetGroupContainer';
import BudgetGroupList from './BudgetGroupList';
import ItemTransactionList from './ItemTransactionList';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Tour from 'reactour';

function App () {
  const [steps] = useState ([
    {
      selector: '[data-tut="reactour__iso"]',
      content: `This is where you can add you paychecks or investments, simply add a paycheck to get started.`,
    },

    {
      selector: '[data-tut="reactour__itemList"]',
      content: `This container will contain your budget groups and you expenses for the group…`,
    },

    {
      selector: '[data-tut="reactour__transactionList"]',
      content: 'Each budget group has expenses, click on the row of the expense to see the transaction for that expense…',
    },
    {
      selector: '[data-tut="reactour__logo"]',
      content: `Simply add a budget group to get started, Food is a good group to start with`,
    },
    {
      selector: '[data-tut="reactour__transactionContainer"]',
      content: 'This area will either be a list of transaction or budget group list…',
    },
    {
      selector: '[data-tut="reactour__deleteGroup"]',
      content: 'You can delete a budget group',
    },
    {
      selector: '[data-tut="reactour__reset"]',
      content: 'You can reset the budget by clicking the reset button',
    },
    {
      selector: '[data-tut="reactour__help"]',
      content: 'You can open this guide by pressing the help icon',
    },
  ]);

  const [isTourOpen, setisTourOpen] = useState (true);

  const [incomes, setincomes] = useState ([
    {paycheck: 'PayCheck#1', amount: 500},
  ]);
  const [budgetGroupValue, setBudgetGroupValue] = useState ([
    {
      title: 'Food',
      expenses: [
        {
          name: 'Groceries',
          amount: 300,
          transactions: [
            {
              name: 'Walmart',
              amount: 40,
            },
          ],
        },

        {
          id: 1,
          name: 'Restaurant',
          amount: 150,
          transactions: [
            {
              name: 'Burger King',
              amount: 10,
            },
          ],
        },
        {
          id: 2,
          name: 'Snacks',
          amount: 10,
          transactions: [
            {
              name: 'Gas Station',
              amount: 5,
            },
          ],
        },
      ],
    },
    // {
    //   title: 'Car Maintainance',
    //   expenses: [
    //     {
    //
    //       name: 'Car repair ',
    //       amount: 200,
    //       transactions: [
    //         {
    //           name: 'tires',
    //           amount: 40,
    //         },
    //         {
    //           name: 'oil change',
    //           amount: 50,
    //         },
    //       ],
    //     },

    //     {
    //       name: 'Alternator',
    //       amount: 70,
    //       transactions: [
    //         {
    //           name: 'Part',
    //           amount: 30,
    //         },
    //         {
    //           name: 'Labor',
    //           amount: 20,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]);
  const [showTractionList, setshowTractionList] = useState (false);
  const [showBudgetGroupList, setshowBudgetGroupList] = useState (true);
  const [rowClickData, setrowClickData] = useState ();

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

  const toggleHelp = () => {
    setisTourOpen (!isTourOpen);
  };
  const handleChangeIncome = (paycheck, amount) => {
    setincomes ([...incomes, {paycheck, amount: Number (amount)}]);
  };

  const handleTransactionSubmit = (name, amount, rowValue) => {
    setBudgetGroupValue (prevBudgetGroupValue => {
      return prevBudgetGroupValue.map (
        (budget, budgetIndex) =>
          budgetIndex === rowValue.groupIndex
            ? {
                ...budget,
                expenses: budget.expenses.map (
                  (expense, expenseIndex) =>
                    expenseIndex === rowValue.itemIndex
                      ? {
                          ...expense,
                          transactions: [
                            ...expense.transactions,
                            {name, amount: Number (amount)},
                          ],
                        }
                      : expense
                ),
              }
            : budget
      );
    });
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
            {name, amount: Number (amount), transactions: []},
          ],
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
    if (!newBudgetGroupValue[groupIndex]) {
      console.log (
        'the delte item does not exist',
        groupIndex,
        index,
        newBudgetGroupValue
      );
      return;
    }
    newBudgetGroupValue[groupIndex].expenses.splice (index, 1);
    setBudgetGroupValue ([...newBudgetGroupValue]);
  };

  const groupDeleteHandler = index => {
    budgetGroupValue.splice (index, 1);
    setBudgetGroupValue ([...budgetGroupValue]);
  };

  const toggleTractionList = (
    isShown,
    index,
    name,
    amount,
    groupIndex,
    anotherindex
  ) => {
    var mytransprop = 'transactions';

    console.log (
      'found teh infor in appsjs',
      isShown,
      index,
      name,
      amount,
      groupIndex,
      anotherindex
    );
    if (budgetGroupValue[groupIndex].expenses[index]) {
      console.log (
        'the item does exist in apps',
        budgetGroupValue[groupIndex].expenses[index]
      );
    }
    if (
      budgetGroupValue[groupIndex].expenses[index].hasOwnProperty (mytransprop)
    ) {
      console.log ('the property exist ');
    } else {
      console.log (
        'the property does not exist ',
        budgetGroupValue[groupIndex].expenses
      );
    }

    setrowClickData ({
      [isShown]: isShown,
      itemIndex: index,
      groupIndex: groupIndex,
    });

    setshowBudgetGroupList (previousValue => !previousValue);
    setshowTractionList (previousValue => !previousValue);
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
    setBudgetGroupValue ([]);
    setincomes ([]);
  };

  useEffect (
    () => {
      if (budgetGroupValue.length < 1) {
        setshowBudgetGroupList (false);
      }
      return () => {};
    },
    [budgetGroupValue]
  );

  const closeTour = () => {
    setisTourOpen (false);
  };

  return (
    <div className="App">
      <MonthlyIncome
        incomes={incomes}
        finalTotal={finalTotal}
        changeIncome={handleChangeIncome}
        deleteIncome={handleDeleteIncome}
        clearBudget={clearBudget}
        toggleHelp={toggleHelp}
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
          <div className="col down1" data-tut="reactour__transactionContainer">
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

      <Tour steps={steps} isOpen={isTourOpen} onRequestClose={closeTour} />
    </div>
  );
}

export default App;
