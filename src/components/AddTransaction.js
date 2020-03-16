import React, { useState, useEffect } from "react";
import "../styles/monthly.css";
import { Input, Button } from "semantic-ui-react";

function AddTransaction(props) {
  const [name, setname] = useState("");
  const [amount, setamount] = useState(0);
 
  const handleSubmit = (event)=> { 
    event.preventDefault(); 
    props.handleTransactionSubmit(name, amount,props.rowValue)

    // setamount("")
    // setname("")
    // props.handleSubmit(name, amount)
    // props.handleTransactionSubmit(name, amount)
  } 
  
  const button = {
    // backgroundColor: '#28B9B5',
    // border: 'none',
    // borderRadius: '15px',
    // color: 'white',
    // padding: '5px 10px',
    // textAlign: 'center',
    // textDecoration: 'none',
    // display: 'inline-block',
    // fontSize: '16px',
    // margin: '4px 2px',
    // cursor: 'pointer'
  } 

  // useEffect(() => {
  //   textInput.current.focus()
  //   return () => {
      
  //   };
  // }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="name"
        className="inputText"
        size="mini"
        value={name}
        onChange={e => setname(e.target.value)}
        placeholder="name"
      />

      <Input
        type="text"
        size='mini'
        id="amount"
        className="InputNumber"
        value={amount}
        onChange={e => setamount(e.target.value)}
        placeholder="amount"
        icon='dollar sign' iconPosition='left'
      
      />
      <Button type="submit" className="primary">Submit</Button>
    </form>
  );
}


export default AddTransaction;
