import axios from 'axios';

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
    return axios.get('/api/philosophers/' + id).then((response) => {
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

const logIn = ({ user_name, password }) => {
    return axios
        .post('/api/user/login', { user_name, password })
        .then((response) => {
            console.log(response);
        });
};

const signUp = ({ email, password, user_name }) => {
    return axios
        .post('/api/user/signup', { user_name, password })
        .then((response) => {
            console.log(response);
        });
};

export {
    getPhilosophers,
    getPhilosopher,
    getPolls,
    getQuotes,
    getQotd,
    logIn,
    signUp,
};
