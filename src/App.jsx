import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './cmps/Navbar';
import { Home } from './pages/Home';
import { Stack } from './pages/Stack';

import './assets/main.scss'
import { Transition, TransitionGroup } from 'react-transition-group';
import { anim } from './assets/animations/animations';
import { AnimatePresence } from 'framer-motion';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './cmps/ProjectDetail';
import { Contacts } from './pages/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setMediaQ } from './store/actions';

function App() {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/stack", name: "Stack", Component: Stack }
  ];
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.innerWidth <= 700) dispatch(setMediaQ('700'))
  }, [])
  return (
    <div className="app">
      <main className="app-main">
        <Navbar />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={() => <Home />}
                />
                <Route
                  exact
                  path='/stack'
                  render={() => <Stack />}
                />
                <Route
                  exact
                  path='/projects/:id'
                  render={() => <ProjectDetails location={location} />}
                />
                <Route
                  exact
                  path='/projects'
                  render={() => <Projects />}
                />
                <Route
                  exact
                  path='/contacts'
                  render={() => <Contacts />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </main>
    </div>
  );
}

export default App;
