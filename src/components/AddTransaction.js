import React, {useState} from 'react';
import '../styles/monthly.css';
import {Input, Button} from 'semantic-ui-react';

function AddTransaction (props) {
  const [name, setname] = useState ('');
  const [amount, setamount] = useState (0);

  const handleSubmit = event => {
    event.preventDefault ();
    props.handleTransactionSubmit (name, amount, props.rowValue);
    setamount ('');
    setname ('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="name"
        className="inputText"
        size="mini"
        value={name}
        onChange={e => setname (e.target.value)}
        placeholder="name"
      />

      <Input
        type="text"
        size="mini"
        id="amount"
        className="InputNumber"
        value={amount}
        onChange={e => setamount (e.target.value)}
        placeholder="amount"
        icon="dollar sign"
        iconPosition="left"
      />
      <Button type="submit" className="primary">Submit</Button>
    </form>
  );
}

export default AddTransaction;
