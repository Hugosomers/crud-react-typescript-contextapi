import { createContext } from 'react';

// type TasksArrayType = {
//   task: string;
//   id: number;
// }

// type ContextType = {
//   tasks: TasksArrayType[];
//   task: string;
//   setTask: (task: string) => void;
//   setTasks: (tasks: TasksArrayType) => void;
// }

// const initialState = {
//   tasks: [],
//   task: '',
//   setTask: (task: string) => {},
//   setTasks: (tasks: TasksArrayType) => {},
// }

const TaskContext = createContext({});

export default TaskContext;