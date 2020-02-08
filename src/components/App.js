import React from "react";
import "../styles/App.css";
import MonthlyIncome from "./MonthlyIncome";
import BudgetGroupContainer from "./BudgetGroupContainer";
// keep the data in a parent container and
// store each data for each component in 
// an array of objects

function App() {
  return (
    <div className="App">
      <MonthlyIncome />
      <hr></hr>
      <BudgetGroupContainer/>
    </div>
  );
}

export default App;
