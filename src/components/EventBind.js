import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message:'hello'
       }
    // this.clickHandler =this.clickHandler.bind(this)     (binding this keyword in the constructor)
     }
     clickHandler=()=>{
         this.setState({
             message:'goodbye'
         })
     }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>clicks</button>  (binding this keyword using bind(this)) */}
          {/* <button onClick={()=>this.clickHandler()}>clicks</button> */}
          {/* <button onClick={this.clickHandler}>clicks</button> */}
          <button onClick={this.clickHandler}>clicks</button>
      </div>
    )
  }
}

export default EventBind