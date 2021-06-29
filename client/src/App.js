import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllPhilosophers from './pages/AllPhilosophers';
import Chat from './pages/Chat';
import JoinChat from './pages/JoinChat';
import Suggestions from './pages/Suggestions';
import FrontPage from './pages/FrontPage';
import { GlobalProvider } from './util/GlobalState';
import NavBar from './components/NavBar';
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
                        component={AllPhilosophers}
                    />
                    <Route exact path="/qotd/:id" component={AllPhilosophers} />
                    <Route exact path="/qotd" component={AllPhilosophers} />
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/chatroom" component={JoinChat} />
                    <Route exact path="/polls" component={AllPhilosophers} />
                    <Route
                        exact
                        path="/polls/:id"
                        component={AllPhilosophers}
                    />
                    <Route exact path="/login" component={AllPhilosophers} />
                    <Route exact path="/suggestion" component={Suggestions} />
                    <Route exact path="/quiz" component={AllPhilosophers} />
                </Switch>
            </Router>
        </GlobalProvider>
    );
};

export default App;
