import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AllPhilosophers from './pages/AllPhilosophers';
import Chat from './pages/Chat';
import JoinChat from './pages/JoinChat';
import Suggestions from './pages/Suggestions';
import FrontPage from './pages/FrontPage';
import Quiz from './pages/Quiz';
import Qotd from './pages/Qotd';
import Login from './pages/Login';
import Polls from './pages/Polls';
import NavBar from './components/NavBar';
import OnePhilosopher from './pages/OnePhilosopher';
import AllPhilosophies from './pages/AllPhilosophies';
import OnePhilosophy from './pages/OnePhilosophy';
import ProfilePage from './pages/ProfilePage';

import { useGlobalContext } from './util/GlobalState';
import { getPhilosophers, getPhilosophies, getPolls, getQuotes } from './util/API';
import Helpers from './util/Helpers';


const App = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    useEffect(() => {
        // Set the global state
        getPhilosophers()
            .then(philosophers => {
                dispatch({ type: 'addPhilosophersBulk', data: philosophers.data });
            });

        getPhilosophies()
            .then(philosophies => {
                dispatch({ type: 'addPhilosophiesBulk', data: philosophies.data });
            });
        getPolls()
            .then(polls => {
                dispatch({ type: 'setPolls', data: polls.data });
            });

        getQuotes()
            .then(quotes => {
                // console.log(quotes);
                let quoteSet = quotes.data;
                let pickedQuotes = [];
                Helpers.randomPicks(quoteSet.length, 6).forEach(quote => {
                    pickedQuotes.push(quoteSet[quote]);
                })
                return pickedQuotes;
            }).then(pickedQuotes => {
                setTimeout(() => {
                    dispatch({ type: 'setQuotes', data: pickedQuotes });
                }, 20);
            });

        // console.log(globalState);


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

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
                <Route exact path="/philosophies" component={AllPhilosophies} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/qotd/:id" component={Qotd} />
                <Route exact path="/qotd" component={Qotd} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/chatroom" component={JoinChat} />
                <Route exact path="/polls" component={Polls} />
                <Route exact path="/philosophy/:id" component={OnePhilosophy} />
                <Route
                    exact
                    path="/polls/:id"
                    component={Polls}
                />
                <Route exact path="/login">
                    {globalState.isLoggedIn === true ?
                        (
                            <Redirect to="/" />
                        ) : null}
                    <Login />
                </Route>
                <Route exact path="/suggestions" component={Suggestions} />
                <Route exact path="/quiz" component={Quiz} />
            </Switch>
        </Router>
    );
};



export default App;
