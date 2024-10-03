import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../store/tasksSlice';

const Task = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description }));
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-between mb-2 p-2 border rounded">
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {editMode ? (
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-2"
          />
        ) : (
          task.description
        )}
      </span>
      <div>
        <button
          onClick={() => dispatch(toggleTask(task.id))}
          className="mr-2 bg-yellow-500 text-white rounded px-2 py-1"
        >
          {task.isDone ? 'Undo' : 'Done'}
        </button>
        {editMode ? (
          <button onClick={handleEdit} className="mr-2 bg-green-500 text-white rounded px-2 py-1">
            Save
          </button>
        ) : (
          <button onClick={() => setEditMode(true)} className="mr-2 bg-blue-500 text-white rounded px-2 py-1">
            Edit
          </button>
        )}
        <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 text-white rounded px-2 py-1">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
