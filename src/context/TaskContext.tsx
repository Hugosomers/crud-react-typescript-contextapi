import { createContext } from 'react';

type ContextType = {
  tasks: string[];
  task: string;
  setTask: React.Dispatch<string>;
  setTasks: React.Dispatch<Array<string>>;
  editMode: boolean;
  setEditMode: React.Dispatch<boolean>;
  index: number | undefined;
  setIndex: React.Dispatch<number>;
}

const initialState = {
  tasks: [],
  task: '',
  setTask: () => {},
  setTasks: () => {},
  editMode: false,
  setEditMode: () => {},
  index: undefined,
  setIndex: () => {},
}

const TaskContext = createContext<ContextType>(initialState);

export default TaskContext;