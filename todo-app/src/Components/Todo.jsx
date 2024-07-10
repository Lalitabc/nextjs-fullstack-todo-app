// src/Components/Todo.js
"use client";
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const Todo = ({ todos ,getTodos}) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [submit,setSubmit] = useState(false)
  const handleAddTodo = (e) => {
    e.preventDefault();
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    console.log(title, description);
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    postDescriptionAndTitle(title, description);
  };

  const postDescriptionAndTitle = async (title, description) => {
    const response = await axios.post('/api', {
      title,
      description,
    });
    if(response){
      setSubmit(!submit)
      console.log(response.data);
    }
  };

  useEffect(()=>{
    getTodos()
  },[submit])

  return (
    <div className="w-full  max-w-max mx-auto mt-10 p-6 bg-gray-800 ">
      {/* Input fields for adding new todos */}
      <input
        ref={titleRef}
        type="text"
        placeholder="Enter Title"
        className="mb-4 bg-gray-800  border border-gray-300 text-white text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <textarea
        ref={descriptionRef}
        placeholder="Enter Description"
        className="mb-4 bg-gray-800 border border-gray-300 text-white text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <button
        onClick={handleAddTodo}
        type="button"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add
      </button>

      {/* Section to display existing todos */}
      <div className="mt-6 space-y-4">
        {todos.map((todo, index) => (
          <div key={index} className="border border-gray-600 flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
            <div>
              <div className=" font-semibold text-white">{todo.title}</div>
              <div className="text-gray-400">{todo.description}</div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
