// src/app/page.js
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from '@/Components/Todo';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get('/api'); // Replace with your actual API endpoint
      setTodos(response.data.todos); // Update state with fetched todos
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    getTodos(); // Fetch todos on component mount
  }, []);

  return (
    <div className="text-white flex items-center justify-center flex-col my-10 text-3xl">

      <Todo todos={todos} getTodos = {getTodos} />
    </div>
  );
}

// https://youtu.be/zgJjWx3b958
