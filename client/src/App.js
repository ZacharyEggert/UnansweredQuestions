import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllPhilosophers from './pages/AllPhilosophers';
import Chat from './pages/Chat';
import JoinChat from './pages/JoinChat';
import Suggestions from './pages/Suggestions';
import FrontPage from './pages/FrontPage';
import Quiz from './pages/Quiz'
import Qotd from './pages/Qotd'
import Login from './pages/Login'




import { GlobalProvider } from './util/GlobalState';
import NavBar from './components/NavBar';

import OnePhilosopher from './components/OnePhilosopher'

const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={FrontPage} />
                    <Route
                        exact
                        path="/philosophers"
                        component={AllPhilosophers}
                    />
                    <Route
                        exact
                        path="/philosopher/:id"
                        component={OnePhilosopher}
                    />
                    <Route exact path="/qotd/:id" component={AllPhilosophers} />
                    <Route exact path="/qotd" component={Qotd} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/chatroom" component={JoinChat} />
                    <Route exact path="/polls" component={AllPhilosophers} />
                    <Route
                        exact
                        path="/polls/:id"
                        component={AllPhilosophers}
                    />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/suggestions" component={Suggestions} />
                    <Route exact path="/quiz" component={Quiz} />
                </Switch>
            </Router>
        </GlobalProvider>
    );
};

export default App;
