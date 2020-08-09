import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
// import { FaSun } from "react-icons/fa";
import { AddTask } from "../AddTask";

export const Header = ({ darkmode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li
              data-testid="quick-add-task-action"
              className="settings_add"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
            >
              +
            </li>
            <li
              data-testid="dark-mode-action"
              className="settings__darkmode"
              onClick={() => setDarkMode(!darkmode)}
            >
              <FaMoon />
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
