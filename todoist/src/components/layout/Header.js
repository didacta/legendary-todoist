import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = ({ darkmode, setDarkMode }) => {
  const [shouldShowMain, setShouldMain] = useState(false);
  const [shouldQuickAddTask, setShowQuickAddTask] = useState(false);
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quickadd-task-action" className="settings_add">
              +
            </li>
            <li data-testid="dark-mode-action" className="settings__darkmode"
            onClick={()=> setDarkMode(!darkmode)}>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
