import React from 'react'
import { taskArray } from '../data/data'
import { useState } from 'react'

const Tasks = () => {

    // Establish demo data
    const[tasks, setTasks] = useState(taskArray);

  return (
    <div className='flex flex-col items-center'>
            {/* Form */}
            <form className='flex flex-row text-md md:text-lg lg:text-xl mt-5 p-6 md:p-3 space-x-2'>
              <input type='text' placeholder='Enter a task' className='p-1 border-2 border-slate-800 rounded-md'></input>
              <button type='submit' className='p-2 bg-green-600 text-white rounded-md'>Submit</button>
            </form>

            {/* Tasks */}
            <div className='flex flex-col border-2 border-slate-500 rounded-md bg-gray-100 p-6 md:p-12 gap-y-4 mt-5'>
              {tasks.map((task, index) => {
                  return(
                    <div key={index} className='flex flex-between items-center space-x-3 text-sm md:text-md lg:text-lg xl:text-xl m-1 md:m-2 lg:m-3 p-2 md:p-4 md:pr-24 rounded-md border-2 border-slate-300'>
                      <input type='checkbox' className='h-4 w-4' defaultChecked={task.state}></input>
                      <p>{task.name}</p>
                  </div>
                  )
              })}
            </div>
    </div>
  )
}

export default Tasks