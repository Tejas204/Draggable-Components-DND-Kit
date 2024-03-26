import React from 'react'
import { taskArray } from '../data/data'
import { useState } from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from './Task'


const Column = () => {

    // Hook: Establish demo data
    const[tasks, setTasks] = useState(taskArray);

    // Hook: Set new task
    const[newTaskName, setNewTaskName] = useState("");

    // Function: handle new task name
    const handleNewTaskName = (e) => {
        setNewTaskName(e.target.value);
    }

    // Function: handle creation of new tasks
    const handleNewTaskCreation = () => {
        let lastTaskIndex = tasks.length;

        let taskObject = {
          'id' : lastTaskIndex + 1,
          'name' : newTaskName,
          'updated' : false
        }

        setTasks([...tasks, taskObject]);
    }


  return (
    
      <div className='flex flex-col items-center'>
        {/* Form */}
        <div className='flex flex-row text-md md:text-lg lg:text-xl mt-5 p-6 md:p-3 space-x-2'>
          <input type='text' name='taskName' value={newTaskName} placeholder='Enter a task' className='p-1 border-2 border-slate-800 rounded-md' onChange={handleNewTaskName}></input>
          <button type='button' className='p-2 bg-green-600 text-white rounded-md' onClick={handleNewTaskCreation}>Submit</button>
        </div>

        {/* Tasks */}
        
          <div className='flex flex-col border-2 border-slate-500 rounded-md bg-gray-100 p-6 md:p-12 gap-y-4 mt-5'>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => {
                return(
                  <Task id={task.id} name={task.name} state={task.state} key={task.id}></Task>
                )
            })}
            </SortableContext>
          </div>
      </div>
    
  )
}

export default Column