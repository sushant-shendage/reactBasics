import React,{Fragment} from 'react'

function JSXExpressionRule3() {
    let names=["user1","user2","user3","user4","user5","user6",]
  return (
    //JSXExpressionRule3
    // <div>JSXExpressionRule3</div>
    //! we can't use all looping stattement inside jsx expression .We can use only the higher-order functions but  all higher order functions are not usefull only those higher order functions are useful that can return the jsx

    <div>
        <p>the names of students are {names.map((ele,i)=><Fragment key={i}>{ele+` `}</Fragment>)}</p>
    </div>


  )
}

export default JSXExpressionRule3