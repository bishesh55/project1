import React, { Component } from 'react'

 class Count extends Component {
     constructor(){
         super()
         this.state={
             count:0
         }
     }
     Increment(){
            // this.setState({
            //     count:this.state.count+1
            // },
            // ()=>{
              
            //     console.log('callback value', this.state.count) //second parameter of setstate method i.e. the callback parameter to load this code after the state has been changed
            // })
            this.setState((prevState)=>({
                count:prevState.count+1
            }))
            console.log(this.state.count)
                
            
     }
     incrementFive(){
        
       
      this.Increment()
      this.Increment()
      this.Increment()
      this.Increment()
      this.Increment()
      
     }
  render() {
    return (
      <div>
        <h1>Count- {this.state.count}</h1>
        <button onClick={()=> this.incrementFive()}>press</button>
      </div>
    )
  }
}

export default Count

