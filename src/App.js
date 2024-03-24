import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


import { DndContext, closestCorners } from '@dnd-kit/core';

function App() {

  // Establish demo data
  const[tasks, setTasks] = useState([
    {
      'id': 1,
      'name': "Wake up on time",
      'state': false
    },
    {
      'id': 2,
      'name': "Eat healthy food",
      'state': false
    },
    {
      'id': 3,
      'name': "Play a competitive sport",
      'state': false
    }

  ])

  return (
    <div className='text-center items-center'>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        My Tasks
      </p>
      

      {/* Establish DND context */}
      <DndContext collisionDetection={closestCorners}>
          <div className='flex flex-col items-center'>
            {/* Form */}
            <form className='flex flex-row text-md md:text-2xl mt-5 p-6 md:p-3 space-x-2'>
              <input type='text' placeholder='Enter a task' className='p-1 border-2 border-slate-800 rounded-md'></input>
              <button type='submit' className='p-2 bg-green-600 text-white rounded-md'>Submit</button>
            </form>

            {/* Tasks */}
            <div className='flex flex-col border-2 border-slate-500 rounded-md bg-gray-100 p-6 md:p-12 gap-y-4'>
              {tasks.map((task, index) => {
                  return(
                    <div key={index} className='flex flex-between space-x-3 p-4 rounded-md border-2 border-slate-300'>
                      <input type='checkbox'></input>
                      <p>{task.name}</p>
                  </div>
                  )
              })}
            </div>
          </div>
      </DndContext>
    </div>
  );
}

export default App;
