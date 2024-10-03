import React from 'react';

const TaskItem = ({ task, startEditing, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className={`border p-2 mb-2 ${task.completed ? 'bg-green-100' : ''}`}>
      <h3 className="font-semibold">{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleTaskCompletion(task.id)} className="mr-2">
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => startEditing(task)} className="mr-2">
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
