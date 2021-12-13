import React, { useState } from 'react';
import TaskContext from './TaskContext';

type ProviderTypes = {
  children: React.ReactNode;
}

const TaskProvider: React.FC<ProviderTypes> = ({ children }) => {
  const [tasks, setTasks] = useState<any>([]);
  const [task, setTask] = useState<any>('');
  const [editMode, setEditMode] = useState<any>(false);
  const [index, setIndex] = useState<any>();

  return (
    <main>
      <TaskContext.Provider value={{ 
        tasks, 
        task, 
        setTask, 
        setTasks, 
        editMode, 
        setEditMode, 
        index, 
        setIndex 
      }}>
        { children }
      </TaskContext.Provider>
    </main>
  )
}

export default TaskProvider; 