import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";

import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { collatedTasks } from "../constants";

export const Tasks = () => {
  const { tasks } = useTasks('1');

  console.log(tasks);
  const projectName = '';

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
