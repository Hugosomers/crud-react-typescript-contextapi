import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './components/button/Button';
import InputComponent from './components/input/input';
import Tasks from './components/tasksList/Tasks';
import TaskProvider from './context/TasksProvider';

const Div = styled.div`
  height: 100vh;
  background-color: #f8f5f2;
`;

const App: React.FC = () => {
  return (
    <TaskProvider>
      <Div>
        <InputComponent />
        <ButtonComponent />
        <Tasks />
      </Div>
    </TaskProvider>
  );
}

export default App;
