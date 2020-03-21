import React from 'react';
import ItemTransactionList from './ItemTransactionList'


function ShowTransactionList (props) {
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