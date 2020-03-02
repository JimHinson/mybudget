import React from "react";
import "../styles/monthly.css";

function GroupTransaction(props) {


  const expenseStyle = {
    color: 'white', 
    backgroundColor: 'red'
  }
console.log('groups transactions',props )

  return (
      <div>
  <hr />
  <div>


<hr />
        <div className="budget__income clearfix" style={expenseStyle}>
    <div className="budget__income--text" style={expenseStyle}>cheese</div>
    <div className="right">
      <div className="budget__income--value">$79</div>
      <div className="budget__income--percentage"> &nbsp;</div>
      <div className="budget__income--value">tes9t</div>

    </div>
    
  </div>
    </div>
      </div>
    
  );
}

export default GroupTransaction;
