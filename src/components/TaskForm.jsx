import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editingTask, editTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  // Set form fields to the editing task values if editing
  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDescription(editingTask.description);
    } else {
      setTaskName('');
      setTaskDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) return;

    const task = {
      id: editingTask ? editingTask.id : Date.now(), // Use existing ID if editing
      name: taskName,
      description: taskDescription,
      completed: editingTask ? editingTask.completed : false,
    };

    if (editingTask) {
      editTask(task.id, task); // Edit existing task
    } else {
      addTask(task); // Add new task
    }

    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        className="border p-2 mr-2"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
