import React,{useState} from 'react'
import Form from './Form';

const Checkbox = () => {
const [value,setValue]=useState(false)


const handleClick=(e)=>{
    setValue(e.target.checked);
    
}
console.log("Checkbox :", value);

  return (
    <div>Checkbox
        <input type='checkbox'  onClick={(e)=>handleClick(e)}></input>
    <Form/>
    </div>
  )
}

export default Checkbox