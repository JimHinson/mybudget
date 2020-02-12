
import React, { useState } from "react";

import "../styles/App.css";
import MonthlyIncome from "./MonthlyIncome";
import BudgetGroupContainer from "./BudgetGroupContainer";
// keep the data in a parent container and
// store each data for each component in 
// an array of objects

function App() {
  const [incomes, setincomes] = useState([ {paycheck: 'Webassign', amount: 500},{paycheck: 'Investment', amount: 100}
  ]);
   
  const handleChangeIncome = (paycheck, amount) => {
    console.log('im in app and I see paycheck and amount', paycheck, amount)
    setincomes([...incomes, { paycheck, amount: Number(amount) }]);
  };

  const handleDeleteIncome = (index) => {
    const tempIncome = [...incomes];
    tempIncome.splice(index, 1);
    setincomes(tempIncome);
  };
 
    const finalTotal = () => { 
  return incomes.reduce((totalIncome, currentIncome) =>     
    totalIncome + currentIncome.amount, // reducer function
    0 // initial accumulator value
  );

  } 

  return (
    <div className="App">
     
      <MonthlyIncome 
       incomes={incomes}
       finalTotal={finalTotal}
       changeIncome={handleChangeIncome}
       deleteIncome={handleDeleteIncome} />

      <hr></hr>
      <BudgetGroupContainer/>
    </div>
  );
}

export default App;
