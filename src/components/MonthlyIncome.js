import React from "react";
import "../styles/monthly.css";
import PayCheckForm from "./PayCheckForm";
import IncomeStream from "./IncomeStream";

function MonthlyIncome(props) {

  const handleFormSubmit = (paycheck, amount) => {
    props.changeIncome(paycheck, amount)
  };

  const handleIncomeDelete = (index) => {
    props.deleteIncome(index);
  };
 return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">January</span>:
        </div>
        <div className="budget__value">+{props.finalTotal()}</div>
        <ul>
          {props.incomes.map((income, index) => (
            <IncomeStream
              key={income.paycheck}
              amount={income.amount}
              paycheck={income.paycheck}
              index={index}
              deleteIncome={handleIncomeDelete}
            />
          ))}
        </ul>
        <PayCheckForm
          paycheck={props.incomes.paycheck}
          amount={props.incomes.amount}
          handleSubmit={handleFormSubmit}
          
        />
      </div>
    </div>
  );
}


export default MonthlyIncome;
