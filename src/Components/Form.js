import React from 'react'
import data from '../data.js'
function Form(props) {
  return (
    <form className='form' onSubmit={(e)=>{
      e.preventDefault(); 
      props.fetchDetails();}}>
        <select className='w3-input' name="" value={props.country} onChange={(e)=>props.setCountry(e.target.value)} id="">
            <option value="">Select Country</option>
            {data.map((item, index) => (<option key={index} value ={item.Code} >{item.Country}</option>))}
        </select>
        <input className='w3-input' type="text" name="" value={props.zip} onChange={(e)=>props.setZip(e.target.value)} id="" />
        <input type='submit' className='submit-button' value={"Find"}/>
    </form>
  )
}



export default Form