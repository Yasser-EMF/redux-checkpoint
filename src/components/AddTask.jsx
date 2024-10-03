import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newTask = {
      id: Date.now(), // Use current timestamp as unique ID
      description,
      isDone: false,
    };

    dispatch(addTask(newTask)); // Dispatch the addTask action
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white rounded px-2 py-1">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
