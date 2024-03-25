import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


import { DndContext, closestCorners } from '@dnd-kit/core';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className='text-center items-center'>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        My Tasks
      </p>
      

      {/* Establish DND context */}
      <DndContext collisionDetection={closestCorners}>
          <Tasks></Tasks>
      </DndContext>
    </div>
  );
}

export default App;
