import React from "react";
const Hello=() =>{
    // return(                 //using JSX
    //     <div className='dummyClass'>
    //         <h1>Hello Sajak</h1>
    //     </div>
    // )
    // return React.createElement('div', null,'Hello SAJAK')
    return React.createElement(
        'div',
        {id:'hello', className: 'dummyClass'},
        React.createElement('h1','null','Hello Sajak'))
}
export default Hello