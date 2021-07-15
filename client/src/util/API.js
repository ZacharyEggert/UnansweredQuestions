import axios from 'axios';
import { response } from 'express';

//get all philosophers
const getPhilosophers = () => {
    return axios.get('/api/philosophers').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};
//get one philosopher
const getPhilosopher = (id) => {
    return axios.get('/api/philosophers/' + id ).then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};
// get all polls
const getPolls = () => {
    return axios.get('/api/polls').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};
//get all quotes
const getQuotes = () => {
    return axios.get('/api/quotes').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};
//get current qotd info eg. question,comments
const getQotd = () => {
    return axios.get('/api/dailyquestion/').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};

const getLogin = (user_name, password) => {
    return axios
        .post('/api/user/login', { user_name, password })
        .then((response) => {
            console.log(response);
        });
};

<<<<<<< HEAD
const getNews = () => {
    return axios.get('./api/news/').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};

export { getPhilosophers, getPolls, getQuotes, getQotd, getLogin, getNews };
=======
export { getPhilosophers, getPhilosopher, getPolls, getQuotes, getQotd, getLogin };
>>>>>>> 35fff7b139376a596cf0e3799f6df22762295a6c
