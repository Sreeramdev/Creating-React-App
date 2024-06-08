import React, {useState} from "react";

function FunctionalComponent(props){
    const [count, setCount] = useState(0)
    const [changeName, setChangeName] = useState("")
   return(
    <div>
        <p> this is Functional Component</p>
        <button onClick={()=> setCount(count + 1)}>click to add 1</button>
        <button onClick={()=> setCount(count - 1)}>click to subtract 1</button>
        <h1>my name is {props.name}, i am {props.age} and i work for {props.company}</h1>
         
         <input onChange = {(e)=>setChangeName(e.target.value)}/>
        <button onClick={()=>props.setName(changeName)}> change name</button>

        <h1>{count}</h1>
    </div>
   )
}

export default FunctionalComponent;
///..///////