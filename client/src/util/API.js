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
const getPhilosophies = () => {
    return axios.get('/api/philosophies').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};

const getPhilosophy = (id) => {
    return axios.get('/api/philosophies/' + id).then((response) => {
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

//put a vote on a poll
const updateVoteCount = (id, data) => {
    return axios.put('/api/polls/' + id, data).then((response) => {
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
    return axios
        .get('/api/dailyquestion/')
        .then((response) => {
            if (response.status < 300) {
                return response;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

const getSuggestions = () => {
    return axios.get('/api/suggestions').then((response) => {
        if (response.status < 300) {
            return response;
        } else {
            console.error(response);
        }
    });
};

const postSuggestion = ({ suggestion, user_id }) => {
    return axios.post('/api/suggestions', suggestion).then((response) => {
        if (response.status < 300) {
            return response;
        } else {
            console.error(response);
        }
    });
};

const approveSugestion = ({ id, user_id }) => {
    return axios
        .put('/api/suggestions/' + id, { status: 'approved', user_id })
        .then((response) => {
            if (response.status < 300) {
                return response;
            } else {
                console.error(response);
            }
        });
};

const deleteSugestion = ({ id }) => {
    return axios.delete('/api/suggestions/' + id).then((response) => {
        if (response.status < 300) {
            return response;
        } else {
            console.error(response);
        }
    });
};

//post a comment on a qotd with an attatched user_id
const postComment = ({ comment, user_id, daily_id }) => {
    return axios
        .post('/api/comments', { comment, user_id, daily_id })
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
    return axios.get('/api/user/logout').then((response) => {
        // console.log(response);
        return response;
    });
};

export {
    getPhilosophers,
    getPhilosopher,
    getPhilosophies,
    getPhilosophy,
    getPolls,
    getQuotes,
    getQotd,
    getNews,
    getSuggestions,
    postSuggestion,
    approveSugestion,
    deleteSugestion,
    logIn,
    logOut,
    signUp,
    postComment,
    updateVoteCount,
};
