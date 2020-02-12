import React, { useState } from "react";
import "../styles/monthly.css";

function PayCheckForm(props) {
  const [paycheck, setpaycheck] = useState("");
  const [amount, setamount] = useState(0);

  const handleSubmit = (event)=> { 
    event.preventDefault(); 
    setamount(0)
    setpaycheck("")
    props.handleSubmit(paycheck, amount)
  } 
  
  const button = {
    backgroundColor: '#28B9B5',
    border: 'none',
    borderRadius: '15px',
    color: 'white',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
  } 



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="paycheck"
        className="payInputText"
        size="15"
        value={paycheck}
        onChange={e => setpaycheck(e.target.value)}
        placeholder="pay source"
      />

      <input
        type="number"
        id="paycheckAmount"
        className="payInputNumber"
        size="6"
        maxLength='6'
        value={amount}
        onChange={e => setamount(e.target.value)}
        placeholder="paycheckAmount"
      />
      <button type="submit" style={button}>Submit</button>
    </form>
  );
}


export default PayCheckForm;
