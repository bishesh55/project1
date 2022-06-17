import React from 'react'

// function Greet(){
//     return <h1>Hello bishesh</h1>
// }
// export default Greet
//in named exportrequires the same function name as in the original
// const Greet=(props)=>{
    // const{name,hero}=props
    // }
    export const Greet=({name,hero}) => //destructuring  props
{
    return(
        <div>
<h1>hello {name} {hero}</h1> 
{/* {props.children} */}
</div>
    )
}