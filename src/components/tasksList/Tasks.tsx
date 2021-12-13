import React, { useContext } from "react";
import styled from "styled-components";
import TaskContext from "../../context/TaskContext";

const Div = styled.div`
  background-color: #fffffe;
  width: 500px;
  height: 800px;
  margin: 10px 0;
`;

const Tasks: React.FC = () => {
  const taskContext = useContext(TaskContext);

  const deleteTask = (index: number) => {
    taskContext.setTasks(
      taskContext.tasks.filter((i: string, ind: number) => ind !== index)
    );
  };

  const editHandle = (task: string, index: number) => {
    taskContext.setEditMode(!taskContext.editMode);
    taskContext.setTask(task);
    taskContext.setIndex(index);
  };

  return (
    <Div>
      <ul>
        {taskContext.tasks.map((task: string, index: number) => (
          <li>
            <p> {task} </p>

            <button type="button" onClick={() => deleteTask(index)}>
              Deletar
            </button>

            <button type="button" onClick={() => editHandle(task, index)}>
              Editar
            </button>
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default Tasks;
