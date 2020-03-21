import React, {useState} from 'react';
import '../styles/App.css';
import MonthlyIncome from './MonthlyIncome';
import BudgetGroupContainer from './BudgetGroupContainer';
import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Tour from 'reactour';
import ShowBugetList from './ShowBugetList'
import ShowTransactionList from './ShowTransactionList'


function App () {
  const [steps] = useState ([
    {
      selector: '[data-tut="reactour__iso"]',
      content: () => (
        <div>
         <h1>Add Paycheck</h1>
        <p>
          Every budget needs input and output. This is where you can add you paychecks (input) or investments, simply enter the name of the paycheck source and an amount to get started.,
          </p>
        </div>
      ),
      // content: `This is where you can add you paychecks or investments, simply add a paycheck to get started.`,
      stepInteraction: true,
      action: node => {
        // by using this, focus trap is temporary disabled
        node.focus()
        // console.log('yup, the target element is also focused!')
        // setshowbugetcontainer(true)
      }
    },

    {
      selector: '[data-tut="reactour__itemList"]',
      content: () => (
        <div>
         <h1>Add Budget Category</h1>
        <p>
          Add a budget category (Food, Vacation, Savings, Home Repairs) to get started
          </p>
        </div>
      ),
      stepInteraction: true,
      action: node => {
        // by using this, focus trap is temporary disabled
        // node.focus()
        // console.log('yup, the target element is also focused!')
        // setshowbugetcontainer(true)
      }
    },

    {
      selector: '[data-tut="reactour__transactionList"]',
      content: () => (
        <div>
         <h1>Add A Budget Expense </h1>
        <p>
          Add a budget item to start tracking your expenses for the category(Food category may have a groceries or restaurant expense) 
          </p>
        </div>
      ),
      stepInteraction: true,
      action: node => {
        // by using this, focus trap is temporary disabled
        // node.focus()
        // console.log('yup, the target element is also focused!')
        // setshowbugetcontainer(true)
      }
      // content: 'Each budget group has expenses, click on the row of the expense to see the transaction for that expense…',
    },
    {
      selector: '[data-tut="reactour__transactionList"]',
      content: () => (
        <div>
         <h1>Click on the row </h1>
        <p>
         Click on the row(or text) to view transactions for the expense
          </p>
          <img alt="downArrow" src='https://cdn.pixabay.com/photo/2012/04/24/11/28/arrow-39450_1280.png' width="200" height="100"/>
        </div>
      ),
      stepInteraction: true,
      action: node => {
        // by using this, focus trap is temporary disabled
        // node.focus()
        // console.log('yup, the target element is also focused!')
        // setshowbugetcontainer(true)
      }
      // content: `Simply add a budget group to get started, Food is a good group to start with`,
    },
    {
      selector: '[data-tut="reactour__transactionContainer"]',
      content: () => (
        <div>
         <h1>Transactions List</h1>
        <p>
         You can always see transactions for an expense by clicking on the row.
         Add transaction (Food Category has a grocey expensea and may have a tractions for Walmart for $50)
          </p>
        </div>
      ),
      stepInteraction: true,
      action: node => {
        // by using this, focus trap is temporary disabled
        // node.focus()
        // console.log('yup, the target element is also focused!')
        // setshowbugetcontainer(true)
      }
      // content: 'This area will either be a list of transaction or budget group list…',
    },
    {
      selector: '[data-tut="reactour__deleteGroup"]',
      content: 'You can delete a budget',
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
 const [showbugetcontainer, setshowbugetcontainer] = useState(true)
  
 const [incomes, setincomes] = useState ([
     {paycheck: 'PayCheck#1', amount: 1500},
  ]);
  const [budgetGroupValue, setBudgetGroupValue] = useState ([
    {
      title: 'Food',
      expenses: [
        {
          name: 'Groceries',
          amount: 280,
          transactions: [
            {
              name: 'Walmart',
              amount: 70,
            },
          ],
        },

        {
          id: 1,
          name: 'Restaurant',
          amount: 60,
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
          amount: 20,
          transactions: [
            {
              name: 'Gas Station',
              amount: 5,
            },
          ],
        },
      ],
    },
  
  ]);
  const [showTractionList, setshowTractionList] = useState (false);
  const [showBudgetGroupList, setshowBudgetGroupList] = useState (true);
  const [rowClickData, setrowClickData] = useState ();

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
        expenses: [
          
        ],
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
    // var mytransprop = 'transactions';

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
    else {
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

  // useEffect (
  //   () => {
  //     if (budgetGroupValue.length < 1) {
  //       setshowBudgetGroupList (false);
  //     }
  //     return () => {};
  //   },
  //   [budgetGroupValue]
  // );

  const closeTour = () => {
    setisTourOpen (false);
  };

  const handleSteps = (currentStep) => {
      console.log('steps what', currentStep)
      // setisTourOpen (false);
    if(currentStep === 2){
      console.log('steps is 2', currentStep)
        setshowbugetcontainer(true)

    }
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

      {showbugetcontainer && (
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
      
        {showBudgetGroupList && (
    
          <ShowBugetList budgetGroupValue={budgetGroupValue} finalTotal={finalTotal}/>
      )}


      {showTractionList && (
        <ShowTransactionList handleTransactionDelete={handleTransactionDelete} handleTransactionSubmit={handleTransactionSubmit} budgetGroupValue={budgetGroupValue} rowClickData={rowClickData}/>
      
      )}
       
     
        </div>
      )}

      <Tour steps={steps} isOpen={isTourOpen} onRequestClose={closeTour} getCurrentStep={curr => handleSteps(curr + 1)} />
    </div>
  );
}

export default App;
