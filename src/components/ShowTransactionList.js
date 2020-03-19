import React from 'react';
import ItemTransactionList from './ItemTransactionList'


function ShowTransactionList (props) {
    const center = {
        margin: 'auto',
        textAlign: 'center',
        width: '100%',
        borderRadius: '60%',
        fontSize: '49px',
        padding: '100% 5%',
        lineHeight: '1.8',
        position: 'relative',
      };
      const circleStyle = {
        height: '225px',
        width: '225px',
        backgroundColor: 'white',
        borderRadius: '50%',
        display: 'inline-block',
        border: '5px solid black',
        marginBottom: '30px',
      };
      const transactionStyle = {
        marginTop: '230px',
      };
return ( 
  
  <div style={transactionStyle}>
    <ItemTransactionList
      handleTransactionDelete={props.handleTransactionDelete}
      budgetGroupValue={props.budgetGroupValue}
      rowValue={{
        itemIndex: props.rowClickData.itemIndex,
        groupIndex: props.rowClickData.groupIndex,
      }}
      handleTransactionSubmit={props.handleTransactionSubmit}
    />
  </div>
)
                }

    export default ShowTransactionList;