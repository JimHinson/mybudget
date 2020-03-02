import React, { useState, useEffect } from "react";
import "../styles/monthly.css";

function AddTransaction(props) {
  const [name, setname] = useState("");
  const [amount, setamount] = useState(0);
 
  const handleSubmit = (event)=> { 
    // event.preventDefault(); 
    // setamount("")
    // setpaycheck("")
    // props.handleSubmit(paycheck, amount)
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

  // useEffect(() => {
  //   textInput.current.focus()
  //   return () => {
      
  //   };
  // }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        className="payInputText"
        size="15"
        value={name}
        onChange={e => setname(e.target.value)}
        placeholder="name"
      />

      <input
        type="text"
        id="amount"
        className="payInputNumber"
        value={amount}
        onChange={e => setamount(e.target.value)}
        placeholder="amount"
        ref={textInput}
      />
      <button type="submit" style={button}>Submit</button>
    </form>
  );
}


export default AddTransaction;
