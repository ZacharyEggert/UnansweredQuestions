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
    return axios.get('/api/dailyquestion/')
    .then((response) => {
        if (response.status < 300) {
            return response;
        }
    })
    .catch((error) => {
        console.log(error);
    });
};

//post a comment on a qotd with an attatched user_id
const postComment = ({comment, user_id, daily_id}) => {
    return axios.post('/api/comments', {comment, user_id, daily_id})
    .then((response) => {
        if (response.status < 300) {
            // console.log(response);
            return response;
        }
    })
    .catch((error) => {
        console.error(error);
    });
};

const logIn = ({ user_name, password }) => {
    return axios
        .post('/api/user/login', { user_name, password })
        .then((response) => {
            // console.log(response);
            return response;
        });
};

const signUp = ({ email, password, user_name }) => {
    return axios
        .post('/api/user/signup', { email, user_name, password })
        .then((response) => {
            // console.log(response);
            return response;
        });
};


const getNews = () => {
    return axios.get('./api/news/').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};


const logOut = () => {
    return axios
        .get('/api/user/logout')
        .then((response) => {
            // console.log(response);
            return response;
        });
};

export {
    getPhilosophers,
    getPhilosopher,
    getPolls,
    getQuotes,
    getQotd,
    getNews,
    logIn,
    logOut,
    signUp,
    postComment,
};
