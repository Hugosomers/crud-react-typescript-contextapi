import React, { useContext } from "react";
import styled from "styled-components";
import TaskContext from "../../context/TaskContext";

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #078080;
  color: #232323;
  font-weight: 700;
  margin: 0 10px;

  :disabled {
    background-color: #808080a0;
    color: #ffffffa2;
  } 
`;

const ButtonComponent: React.FC= () => {
  const taskContext: any = useContext(TaskContext);

  const buttonHandle = (e: React.MouseEvent<HTMLElement>): void => {
    taskContext.setTasks([...taskContext.tasks, taskContext.task]);
    taskContext.setTask('');
  }

  const editButtonHandle = () => {
    taskContext.setTasks(taskContext.tasks.map((task: string, ind: number) => taskContext.index === ind ? taskContext.task : task));
    taskContext.setEditMode(false);
  }

  return (
    <>
    { taskContext.editMode ? 
      <Button
        onClick={editButtonHandle}
      >
        Editar
      </Button>
      :
      <Button
        onClick={buttonHandle}
        disabled={taskContext.task.length >= 3 ? false : true}
      >
        Enviar
      </Button>
    }
    </>
  )
};

export default ButtonComponent;