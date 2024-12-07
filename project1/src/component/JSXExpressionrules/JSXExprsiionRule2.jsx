import React from 'react'

function JSXExprsiionRule2() {
    //!in jsx expression we can't write any conditional statement except ternery operator and shortCircuit operators

    //!conditional statement is allowed inside jsx and if-else statemnts are not allowed inside jsx expression
    //!if eles statemnts are not allowed
    
    let arr2=[2,3,5];
    let arr3=[];

    let username="user1",password=123;
    return (
      // <div> {(3>5)?`first is larger..!`:`second is larger..!`}</div>
      // <div>{2===2 && 'statement returning true'}</div>
      
      //!short circuit && operator .if first statement is true then only second statement will be checked
//  <div>{arr2.length>0 && arr2.map((val)=>`${val} |`)}</div> 

  //!short circuit || operator .if first statement is true then only second statement will be checked
  // <div>{arr2.length==0 ||  `array is empty..!`}</div> 

  // <div>{"a" && "b" && "c"}</div>
  <div>{username=="user1" && password ==1523 && "welcome user..!" || "wrong credentials..!"}</div>



  )
}

export default JSXExprsiionRule2


//replacement for if -->shortCircuit && 
//replacement for switch case -->shortCircuit ||
//replacement for if-else--> ternery operator
//
 