import React, { useContext } from "react";
import styled from "styled-components";
import TaskContext from "../../context/TaskContext";

const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 4px;
`;

const InputComponent: React.FC= () => {
  const taskContext: any = useContext(TaskContext);

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    taskContext.setTask(e.target.value)
  }

  return (
    <Input 
      placeholder="Digite sua task"
      onChange={ inputHandle }
      value={ taskContext.task }
    />
  )
};

export default InputComponent;