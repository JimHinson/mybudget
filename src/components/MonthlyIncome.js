import React from 'react';
import '../styles/monthly.css';
import PayCheckForm from './PayCheckForm';
import IncomeStream from './IncomeStream';

function MonthlyIncome (props) {
  const handleFormSubmit = (paycheck, amount) => {
    props.changeIncome (paycheck, amount);
  };

  const handleIncomeDelete = index => {
    props.deleteIncome (index);
  };

  const resetStyle = {
    backgroundColor:'#333',
    marginRight: '80%',
    color:'white',
fontSize:'48px',
fontWeight:'300',
gap:'normal',
lineHeight: '57.6px',
margin:'0px 0px 4px',
textAlign:'center',
border: '5px solid white',
borderRadius: '20px',
marginBottom: '30px', 
  }


  const margB = {
marginTop: '30px', 
  }
  return (

    <div className="top">
      <div >
         <button style={resetStyle} onClick={props.clearBudget}> RESET</button>
         </div>
      <div className="budget" style={margB}>
        <div className="budget__title">
          Available Budget in{' '}
          <span className="budget__title--month">January</span>:
        </div>
        <div className="budget__value">+{props.finalTotal ()}</div>
        <ul>
          {props.incomes.map ((income, index) => (
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
