import React, { useState } from 'react'
import '../styles/App.css'
import MonthlyIncome from './MonthlyIncome'
import BudgetGroupContainer from './BudgetGroupContainer'
import BudgetGroupList from './BudgetGroupList'


function App() {
  const [incomes, setincomes] = useState([
    { paycheck: 'Webassign', amount: 500 },
    { paycheck: 'Investment', amount: 100 },
  ])
  const [budgetGroupValue, setBudgetGroupValue] = useState([
    {
      title: 'Food',
      totolAmount: 300,
      // isItemEmpty: true,
      getTotal: function() {
        console.log(this.expenses, 'There are no expenses', this.expenses.length)

        if (this.expenses.length === 0) {
          console.log('There are no expenses', this.expenses)
          return 0
        }
        var currentexpenses = this.expenses
        return currentexpenses.reduce(
          (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
          0, // initial accumulator value
        )
      },
      expenses: [
        { id: 0, name: 'Groceries', amount: 300,  transactions: [
          {
            name: 'walmart',
            amount: 100,
          },
          {
            name: 'aldi',
            amount: 50,
   
          }, 
          {
            name: 'taco',
            amount: 25,
          },
        ],  },

        { id: 1, name: 'Restaurant', amount: 150, 
        transactions: [
          {
            name: 'BJs',
            amount: 200,
          }]
      
      },
        { id: 1, name: 'snacks', amount: 10, transactions: [
          {
            name: 'Sheetz',
            amount: 200,
          }] },
      ],
    
    },
  ])
  const [showTractionList, setshowTractionList] = useState(false)
  const [showBudgetGroupList, setshowBudgetGroupList] = useState(true)
  const [transactionData, settransactionData] = useState(9)

  const center = {
    margin: 'auto',
    textAlign: 'center',
    width: '100%',
    borderRadius: '60%',
    fontSize: '49px',
    padding: '100% 5%',
    lineHeight: '1.8',
    position: 'relative',
  }
  const circleStyle = {
    height: '225px',
    width: '225px',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'inline-block',
    border: '5px solid black',
    marginBottom: '30px',
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
  }
  // code for income area
  const handleChangeIncome = (paycheck, amount) => {
    setincomes([...incomes, { paycheck, amount: Number(amount) }])
  }

  const handleDeleteIncome = index => {
    const tempIncome = [...incomes]
    tempIncome.splice(index, 1)
    setincomes(tempIncome)
  }

  const finalTotal = () => {
    return incomes.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  // code for budget container
  const handleFormSubmit = (name, amount, index) => {
    setBudgetGroupValue(prevBudgetGroupValue => {
      return [
        ...prevBudgetGroupValue.slice(0, index),
        {
          ...prevBudgetGroupValue[index],
          expenses: [
            ...prevBudgetGroupValue[index].expenses,
            { name, amount: Number(amount) },
          ],
        },
        ...prevBudgetGroupValue.slice(index + 1),
      ]
    })
  }

  // useEffect(() => {
  //   return () => {}
  // }, [budgetGroupValue])

  const addGroupName = name => {
    setBudgetGroupValue([
      ...budgetGroupValue,
      {
        title: name,
        totolAmount: 0,
        expenses: [],
      },
    ])
  }

  const handleDeleteItem = (groupIndex, index) => {
    console.log(groupIndex, index, 'group and index', budgetGroupValue[groupIndex].expenses[index] )

   let newBudgetGroupValue = budgetGroupValue
   newBudgetGroupValue[groupIndex].expenses.splice(index, 1)

    console.log('changeDD in appsjs', budgetGroupValue)

    
      setBudgetGroupValue([...newBudgetGroupValue])

  }

  const groupDeleteHandler = index => {
    console.log('I have the index in apps for groups', index)
    const tempGroup = [...budgetGroupValue]
    tempGroup.splice(index, 1)
    setBudgetGroupValue(tempGroup)
  }


  const toggleTractionList = (isShown, index, name, amount) => {
    settransactionData(index)
    
    setshowBudgetGroupList(false)
    setshowTractionList(true)
    console.log(transactionData, 'name is herea with amiunt isShown',!isShown, 'Index', index, 'name', name, amount)
    // setshowBudgetGroupList(false)
    // setshowTractionList(true)
    
  }

  const transactionTotal = (index) => {
   
    var currentexpenses = budgetGroupValue.expenses[index].transactions
    return currentexpenses.reduce(
      (totalIncome, currentIncome) => totalIncome + currentIncome.amount, // reducer function
      0, // initial accumulator value
    )
  }

  return (
    <div className="App">
      <MonthlyIncome
        incomes={incomes}
        finalTotal={finalTotal}
        changeIncome={handleChangeIncome}
        deleteIncome={handleDeleteIncome}
      />

      <hr></hr>
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
        <div className="col down1">
          <div style={circleStyle}>
            <span style={center}>
              <b>Income</b> ${finalTotal()}
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


          <div  >
          
              <div >
                {budgetGroupValue.map((budgetInfo, index) => (
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
        </div>
           )}








{showTractionList && ( 
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
              {console.log('I can see it here', budgetGroupValue)}
              {budgetGroupValue[0].expenses[1].transactions.map((budgetInfo, index) => (
                  <div className="budget__income1 clearfix" key={budgetInfo.name}>
                  <hr />
                  <div className="budget__income--value">{budgetInfo.name}</div>
                  <div className="right">
                    <div className="budget__income--value">{budgetInfo.amount}</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                  </div>
                </div>
                ))}
                {/* <div>Total:  {transactionTotal(index)} </div> */}
              </div>
         

          </div>
        </div>
           )}

       
















      </div>
    </div>
  )
}

export default App
