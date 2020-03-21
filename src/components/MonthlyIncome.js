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
    backgroundColor: '#333',
    marginRight: '80%',
    color: 'white',
    fontSize: '48px',
    fontWeight: '300',
    gap: 'normal',
    lineHeight: '57.6px',
    margin: '30px 0px 4px',
    textAlign: 'center',
    border: '5px solid white',
    borderRadius: '20px',
    marginBottom: '-3px',
    cursor: 'pointer',
  };

  const helpStyle = {
    fontSize: '28px',
    fontWeight: '300',
    lineHeight: '25.6px',
    margin: '-90px 0px 4px 90%',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const margB = {
    marginTop: '30px',
  };
  return (
    <div className="top">
      <div>
        <button
          style={resetStyle}
          onClick={props.clearBudget}
          color="youtube"
          data-tut="reactour__reset"
        >
          {' '}RESET
        </button>
      </div>
      <div style={helpStyle} onClick={props.toggleHelp}>
        {' '}<i className="plus icon" data-tut="reactour__help"> Help </i>{' '}
      </div>
      <div className="budget" style={margB} data-tut="reactour__iso">
        <div className="budget__title">
          Available Budget in{' '}
          <span className="budget__title--month">January</span>:
        </div>
        <div className="budget__value">+{props.finalTotal ()}</div>
        <ul className="striped-listIncome">
          {props.incomes.map ((income, index) => (
            <li key={index}>
              {' '}
              <IncomeStream
                key={income.paycheck}
                amount={income.amount}
                paycheck={income.paycheck}
                index={index}
                deleteIncome={handleIncomeDelete}
              />
            </li>
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
