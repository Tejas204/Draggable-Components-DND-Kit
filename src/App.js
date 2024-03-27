import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { DndContext, closestCorners } from '@dnd-kit/core';
import Column from './components/Column';
import { taskArray } from './data/data';
import { arrayMove } from '@dnd-kit/sortable';

function App() {

  // Hook: set tasks
  const [tasks, setTasks] = useState(taskArray);

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

  // Function: get task index
  const getTaskIndex = (id) => {
    return tasks.findIndex(task => task.id === id);
  }

  // Function: handle drag event
  const handleDragEnd = (e) => {
    const {active, over} = e;

    if(active.id === over.id) return;


    setTasks((tasks) => {
      const originalPos = getTaskIndex(active.id);
      const newPos = getTaskIndex(over.id);

      console.log(arrayMove(tasks, 1, 2));
      return arrayMove(tasks, originalPos, newPos);
    });
  };


  return (
    <div className='text-center items-center flex flex-col'>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        My Tasks
      </p>
      
      {/* Form */}
      <div className='flex flex-row text-md md:text-lg lg:text-xl mt-5 p-6 md:p-3 space-x-2'>
          <input type='text' name='taskName' value={newTaskName} placeholder='Enter a task' className='p-1 border-2 border-slate-800 rounded-md' onChange={handleNewTaskName}></input>
          <button type='button' className='p-2 bg-green-600 text-white rounded-md' onClick={handleNewTaskCreation}>Submit</button>
      </div>

      {/* Establish DND context */}
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <Column tasks={tasks}></Column>
      </DndContext>
    </div>
  );
}

export default App;
