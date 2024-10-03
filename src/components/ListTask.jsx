import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true; // For 'all'
  });

  return (
    <div>
      <div className="mb-4">
        <button onClick={() => setFilter('all')} className="mr-2 px-4 py-2 bg-gray-200 rounded">
          All
        </button>
        <button onClick={() => setFilter('done')} className="mr-2 px-4 py-2 bg-green-200 rounded">
          Done
        </button>
        <button onClick={() => setFilter('notDone')} className="px-4 py-2 bg-red-200 rounded">
          Not Done
        </button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
