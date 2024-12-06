import React from 'react'

function JSXExpressionRule1() {
    //! rule 1:we should not write console statements inside jsx XPathExpression because it will not displayed
  return (
     
     <div>{console.log("helow world..!")}</div>
  )



}

export default JSXExpressionRule1