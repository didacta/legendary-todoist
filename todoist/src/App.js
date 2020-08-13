import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';
import { useSpring, animated } from 'react-spring';

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <animated.div style={props}>
          <main className={darkMode ? 'darkmode' : undefined}>
            <Header darkmode={darkMode} setDarkMode={setDarkMode} />

            <Content />
          </main>
        </animated.div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
