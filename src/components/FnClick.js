import React from 'react'

function FnClick() {
  function clickHandler(){
    console.log('button clicked')
    
  }
  return (
    <div>
        <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default FnClick