import React from 'react'
import { taskArray } from '../data/data'
import { useState } from 'react'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from './Task'


const Column = ({tasks}) => {


  return (
      
        <div className='flex flex-col border-2 border-slate-500 rounded-md bg-gray-100 p-6 md:p-12 gap-y-4 mt-5'>
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => {
                return(
                  <Task id={task.id} name={task.name} state={task.state} key={task.id}></Task>
                )
            })}
            </SortableContext>
        </div>
  )
}

export default Column