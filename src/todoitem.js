import React from 'react';

export default function Todoitem({ item, checked, id, handlechange }) {
  const handleChange = (id) => {

        handlechange(id)
  };

  return (
    <li className='flex items-center m-2'>
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={()=>handleChange(id)}
          className="w-4 h-4 text-blue-600 bg-yellow-100 border-gray-300 rounded"
        />
      </div>
      <div className='ml-2'>
        <span className='popr text-lg font-medium'>{item}</span>
      </div>
    </li>
  );
}
