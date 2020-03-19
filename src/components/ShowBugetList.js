import React from 'react';
import BudgetGroupList from './BudgetGroupList'
import '../styles/App.css'
import '../styles/monthly.css'


function ShowBudgetList (props) {
    const spanStyle = {
        // margin: 'auto',
        // textAlign: 'spanStyle',
        // width: '100%',
        // borderRadius: '60%',
        // fontSize: '49px',
        // padding: '100% 5%',
        // lineHeight: '1.8',
        // position: 'relative',
        // marginTop: '20px', 
        float: 'left',
        clear: 'left',
        fontSize: '30px',
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
      const BGLStyle = {
        marginRight: '2%',
      };
      const down = {
        marginTop: '20px',
      };
return ( 

          <div className="col down1" style={BGLStyle} data-tut="reactour__transactionContainer">
            <div style={circleStyle}>
              <span style={spanStyle}>
                <b>Income</b>
              </span>
              <span style={spanStyle}>
                ${props.finalTotal ()}
              </span> 
            </div>

            <div className="budget__income1 clearfix">
              <hr />
              <div className="budget__income--text">Expense</div>
              <div className="right">
                <div className="budget__income--value">Planned</div>
                <div className="budget__income--percentage">&nbsp;</div>
              </div>
            </div>
            <hr />
            <div>

              <div>
                {props.budgetGroupValue.map ((budgetInfo, index) => (
                  <BudgetGroupList
                    key={budgetInfo.title}
                    budgetData={budgetInfo}
                    finalAmountForGroup={props.finalTotal}
                    index={index}
                    totalBudget={props.finalTotal}
                  />
                ))}
              </div>
            </div>
          </div>
)
                }

    export default ShowBudgetList;