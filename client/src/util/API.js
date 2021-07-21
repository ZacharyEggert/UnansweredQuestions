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

const getProfileInfo = (user_id) => {
    return axios.get('/api/profile/' + user_id).then((response) => {
        if (response.status < 300) {
            return response;
        } else {
            console.error(response);
        }
    });
};

const postProfileInfo = ({ profile, user_id }) => {
    return axios.post('/api/profile', { profile, user_id }).then((response) => {
        if (response.status < 300) {
            return response;
        } else {
            console.error(response);
        }
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

const approveSuggestion = ({ id, user_id }) => {
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

const deleteSuggestion = ({ id }) => {
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




// const logIn = ({ user_name, password }) => {
const logIn = ({ user_name, password, remember }) => {
    return axios
        .post('/api/user/login', { user_name, password, remember })
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

const getNewsContext = () => {
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

const getAllUsers = () => {
    return axios
        .get('/api/user/')
        .then((response) => {
            if (response.status < 300) {
                return response;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

const deleteUser = ({ id }) => {
    return axios
        .delete('/api/user/' + id)
        .then((response) => {
            if (response.status < 300) {
                return response;
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const removeAdminUser = ({ id }) => {
    return axios
        .put('/api/user/' + id, { admin: false })
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

const adminUser = ({ id }) => {
    return axios
        .put('/api/user/' + id, { admin: true })
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

const getAllBlogs = () => {
    return axios
        .get('/api/blog/')
        .then((response) => {
            console.log(response);
            if (response.status < 300) {
                return response.data;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

const getOneBlog = (id) => {
    return axios
        .get('/api/blog/' + id)
        .then((response) => {
            if (response.status < 300) {

                return response.data;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
const postBlogComment = ({ comment, user_id, blog_id, user_name }) => {
    return axios
        .post('/api/blogComments', { comment, user_id, blog_id, user_name })
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

const getBlogComment = (id) => {
    return axios
        .get('/api/blogcomments/' + id)
        .then((response) => {
            if (response.status < 300) {
                return response;
            }
        })
        .catch((error) => {
            console.error(error);
        });
};

const postBlog = ({ title, content, user_id, userName }) => {
    return axios
        .post('/api/blog', { title, content, user_id, userName })
        .then((response) => {
            if (response.status < 300) {
                return response;
            }
        })
        .catch((error) => {
            console.error(error);
        });
};



const checkValidSession = () => {
    return axios
        .post('/api/user/validatesession/', {})
        .then((response) => {
            if (response.status < 300) {
                return response;
            }
        })
        .catch((error) => {
            if (error.response.status === 401) {
                // console.log(error.response.data.message);
            } else {
                console.error(error);
            }
        });
};

const API = {
    getPhilosophers,
    getPhilosopher,
    getPhilosophies,
    getPhilosophy,
    getPolls,
    getQuotes,
    getQotd,
    getNewsContext,
    getSuggestions,
    postSuggestion,
    approveSuggestion,
    deleteSuggestion,
    logIn,
    logOut,
    signUp,
    postComment,
    updateVoteCount,
    getAllUsers,
    deleteUser,
    adminUser,
    removeAdminUser,
    getAllBlogs,
    getOneBlog,
    getBlogComment,
    postBlog,
    postProfileInfo,
    getProfileInfo,
    checkValidSession,
    postBlogComment
};

export default API;

export {
    getPhilosophers,
    getPhilosopher,
    getPhilosophies,
    getPhilosophy,
    getPolls,
    getQuotes,
    getQotd,
    getNewsContext,
    getSuggestions,
    postSuggestion,
    approveSuggestion,
    deleteSuggestion,
    logIn,
    logOut,
    signUp,
    postComment,
    updateVoteCount,
    getAllUsers,
    deleteUser,
    adminUser,
    removeAdminUser,
    getAllBlogs,
    getOneBlog,
    getBlogComment,
    postProfileInfo,
    getProfileInfo,
    checkValidSession,
    postBlog,
    postBlogComment

};
