import React, { useEffect, useState } from 'react'
import './Todo.css'
import Addtask from './Addtask'
import ListTask from './ListTask'

const Todo = () => {
    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        document.title = `You have ${tasks.length} pending task(s)`
    })

    const addTask = (title) =>{
        const newTask = [...tasks, {title}]
        setTasks(newTask)

    }

    const removeTask =(index)=>{
        const newTask =[...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }
  return (
    <>
      <div className='todo-container'>
        <div className='header h1'>TODO APP</div>
        <div className='add-task'>
            <Addtask addTask={addTask}/>
            </div>
        <div className='tasks'>
            {tasks.map((task, index)=>(
                <ListTask task={task} removeTask={removeTask} index={index} key={index}/>
            ))}
            </div>
      </div>

    </>
  )
}

export default Todo