import React, { useState } from 'react';
import TaskContext from './TaskContext';

type ProviderTypes = {
  children: React.ReactNode;
}

const TaskProvider: React.FC<ProviderTypes> = ({ children }) => {
  const [tasks, setTasks] = useState<Array<string>>([]);
  const [task, setTask] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [index, setIndex] = useState<number | undefined>();

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