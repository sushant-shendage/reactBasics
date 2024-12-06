import React from 'react'

function JSXrule5Fragment() {
    //!rect fragments are simply a pair of empty angular braces <></>. by by using react fragments we are avoiding creation of extra nodes so that it will hel to boost performence of application
  return (
    < >JSXrule5Fragment
        <h1>Fragment</h1>
    </>

    //!with empty fragment we can't use  key
  )
  //!we can write fragment in two different ways
  //!way1:with empty angular braces
  //!way2:with react fragment
  // return (
  //   <React.fragment key={fg}>
  //    JSXrule5Fragment
  //       <h1>Fragment</h1>
  //   </React.fragment>
  // )
  //!use of key
  //!way3:with react fragment(use after destructuring from react).We need to import fragment from react
  //?import {fragment} from react;
//   return (
//     <fragment>
//      JSXrule5Fragment
//         <h1>Fragment</h1>
//     </fragment>
//   )

}

export default JSXrule5Fragment