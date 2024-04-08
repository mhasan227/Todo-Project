
import React, { useState, useEffect } from 'react';

//import TodoList from './TodoList';

const Home = () => {
  const [allTodosData, setAllTodosData] = useState([]);

  useEffect(() => {
    // Load todos from local storage
    const storedTodosData = JSON.parse(localStorage.getItem('todos')) || [];
    setAllTodosData(storedTodosData);
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever the state changes
    localStorage.setItem('todos', JSON.stringify(allTodosData));
  }, [allTodosData]);

  const addTodo = (text,priority) => {
    let uniqueId = (new Date()).getTime();
    const newTodo = {
      id: uniqueId,
      text,
      isCompleted: false,
      priority
    };
    setAllTodosData((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleToggle = (id) => {
    setAllTodosData((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setAllTodosData((prev) => prev?.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className='text-3xl'>Todo App</h1>
      
      
    </div>
  );
};

export default Home;
