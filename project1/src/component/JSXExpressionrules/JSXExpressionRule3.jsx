import React,{Fragment} from 'react'

function JSXExpressionRule3() {
    let names=["ram","shyam","seeta","geeta","meena","user6"]
  return (
    //JSXExpressionRule3
    // <div>JSXExpressionRule3</div>
    //! we can't use all looping stattement inside jsx expression . We can use only the higher-order functions but  all higher order functions are not usefull only those higher order functions are useful that can return anything/value the jsx
    //! mainly the map(),filter() and reduce()
    
    // <div>
    //     <p>the names of students are {names.map((ele,i)=><Fragment key={i}>{ele+` `}</Fragment>)}</p>
    // </div>
    //here we are displying only those elements which satisfies condition i.e elements eanding with a

<div>
<p>the names of students are {names.map((ele,i)=><Fragment key={i}>{ele.endsWith('a') && ele+` `}</Fragment>)}</p>
</div>

  )
}

export default JSXExpressionRule3