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
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="paycheck"
        className="input"
        value={paycheck}
        onChange={e => setpaycheck(e.target.value)}
        placeholder="pay source"
      />

      <input
        type="text"
        id="paycheckAmount"
        className="input"
        value={amount}
        onChange={e => setamount(e.target.value)}
        placeholder="paycheckAmount"
      />
      <button type="submit">Submit</button>
    </form>
  );
}


export default PayCheckForm;
