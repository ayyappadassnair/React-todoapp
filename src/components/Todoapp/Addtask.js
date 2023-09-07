import React, { useState } from 'react'

const Addtask = ({addTask}) => {
    const[value, setValue] = useState("")

    const addItem = ()=>{
       addTask(value)
       setValue("");
    }
  return (
    <>
        <div className='input-container'>
            <input type='text' className='input  shadow p-3 mb-5 bg-body rounded' placeholder='Add a Task' value={value}  onChange={(e)=>{setValue(e.target.value)}} />
            <button onClick={addItem} className='add-btn btn btn-primary'>ADD TASK</button>
        </div>
    </>
  )
}

export default Addtask