import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ToDo Application with Redux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
