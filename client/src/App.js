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
// import News from './pages/News';
import NavBar from './components/NavBar';
import OnePhilosopher from './pages/OnePhilosopher';
import AllPhilosophies from './pages/AllPhilosophies';
import OnePhilosophy from './pages/OnePhilosophy';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import AllBlogs from './pages/AllBlogs';
import OneBlog from './pages/OneBlog';

import { useGlobalContext } from './util/GlobalState';
import { checkValidSession, getPhilosophers, getPhilosophies, getPolls, getQuotes } from './util/API';
import Helpers from './util/Helpers';


const App = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    useEffect(() => {
        checkValidSession()
        .then((response) => {
            if(response.status < 300){
                // console.log('session is valid');
                // console.log(response);
                dispatch({
                    type: 'LOG_IN',
                    data: {user:response.data}
                })
            }
        }).catch((error) => {
            console.error(error);
        });


        // Set the global state
        getPhilosophers()
            .then(philosophers => {
                dispatch({ type: 'addPhilosophersBulk', data: philosophers.data });
            }).catch(err => {
                console.error(err);
            });

        getPhilosophies()
            .then(philosophies => {
                dispatch({ type: 'addPhilosophiesBulk', data: philosophies.data });
            }).catch(err => {
                console.error(err);
            });
        getPolls()
            .then(polls => {
                dispatch({ type: 'setPolls', data: polls.data });
            }).catch(err => {
                console.error(err);
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
            }).catch(err => {
                console.error(err);
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
                <Route exact path="/blog" component={AllBlogs} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/qotd/:id" component={Qotd} />
                <Route exact path="/qotd" component={Qotd} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/chatroom" component={JoinChat} />
                <Route exact path="/polls" component={Polls} />
                <Route exact path="/philosophy/:id" component={OnePhilosophy} />
                <Route exact path="/blog/:id" component={OneBlog} />
                <Route exact path="/dashboard">
                    {globalState.isLoggedIn ?
                        (globalState.currentUser?.user?.admin ?
                            <Dashboard user={globalState.currentUser?.user} /> :
                            <Redirect to="/philosophers" />
                        ) :
                        <Redirect to="/login" />}
                </Route>
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
                <Route exact path="/suggestions" >
                    <Suggestions user={globalState.currentUser?.user} />
                </Route>
                <Route exact path="/quiz">
                    <Quiz philosophers={globalState.philosophers} />
                </Route>
            </Switch>
        </Router>
    );
};



export default App;
