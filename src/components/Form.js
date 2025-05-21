import React from 'react'
export default function Form( {description,setDescription,onAddItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return (alert('you must add a value'));
    const newItem = {
      id : Date.now() ,
      description:description ,
      selected : false 
    }
    onAddItem(newItem);
    setDescription("");
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <input type='text' placeholder='Enter a task' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <button className='btn-add'>Add</button>
      </div>
    </form>
  )
}
