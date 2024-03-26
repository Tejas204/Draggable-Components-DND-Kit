import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities';
import React from 'react'

const Task = ({id, name, state}) => {
  
  // Hook: Set useSortable
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});

  const style = {
    transition,
    transform: CSS.Transform.toString,
  };

  return (
    <div className='flex flex-between items-center space-x-3 text-sm md:text-md lg:text-lg xl:text-xl m-1 md:m-2 lg:m-3 p-2 md:p-4 md:pr-24 rounded-md border-2 border-slate-300'
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
    >
        <input type='checkbox' className='h-4 w-4' defaultChecked={state}></input>
        <p>{name}</p>
    </div>
  )
}

export default Task