import React, {useState} from 'react';
import '../styles/monthly.css';
import { Button,  Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function PayCheckForm (props) {
  const [paycheck, setpaycheck] = useState ('');
  const [amount, setamount] = useState (0);

  const handleSubmit = event => {
    event.preventDefault ();
    setamount ('');
    setpaycheck ('');
    props.handleSubmit (paycheck, amount);
  };

  const payInputStyle = {
    width: '100px'
  }
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
        required
      />

      <Input
        type="text"
        id="paycheckAmount"
        className="payInputNumber"
        value={amount}
        onChange={e => setamount (e.target.value)}
        placeholder="paycheckAmount"
        icon='dollar sign' iconPosition='left'
        size='large'
        style={payInputStyle}
        required
      />
      <Button type="submit" className="primary">
        Submit
      </Button>
    </form>
  );
}

export default PayCheckForm;









