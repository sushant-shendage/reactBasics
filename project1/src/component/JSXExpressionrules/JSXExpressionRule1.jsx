import React from 'react'

function JSXExpressionRule1() {
    //! rule 1:we should not write console statements inside jsx XPathExpression because it will not displayed
  return (
     
     <div><p>{console.log("helow world..!")}</p></div>
  )



}

export default JSXExpressionRule1