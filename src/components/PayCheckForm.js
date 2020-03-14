import React, {useState, useEffect} from 'react';
import '../styles/monthly.css';
import { Button, Divider, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function PayCheckForm (props) {
  const [paycheck, setpaycheck] = useState ('');
  const [amount, setamount] = useState (0);
  // const [textInput, settextInput] = useState (React.createRef ());

  const handleSubmit = event => {
    event.preventDefault ();
    setamount ('');
    setpaycheck ('');
    props.handleSubmit (paycheck, amount);
  };

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
    cursor: 'pointer',
  };

  useEffect (() => {
    // textInput.current.focus ();
    return () => {};
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="paycheck"
        className="payInputText"
        size="small"
        value={paycheck}
        onChange={e => setpaycheck (e.target.value)}
        placeholder="Add A Paycheck"
      />

      <Input
        type="text"
        id="paycheckAmount"
        className="payInputNumber"
        value={amount}
        onChange={e => setamount (e.target.value)}
        placeholder="paycheckAmount"
        icon='dollar sign' iconPosition='left'
      />
      <Button type="submit" className="primary">
        Submit
      </Button>
    </form>
  );
}

export default PayCheckForm;









