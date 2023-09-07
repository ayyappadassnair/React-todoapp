import React from 'react'

const ListTask = ({task, index, removeTask}) => {
  return (
    <>
        <div className='list-task  shadow  bg-body rounded'>
            {task.title}
            <button onClick={()=>{removeTask(index)}} className='delete-btn btn btn-danger'>Delete</button>
        </div>
    </>
  )
}

export default ListTask