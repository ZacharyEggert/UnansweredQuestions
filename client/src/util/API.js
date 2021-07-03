import axios from 'axios';

const getPhilosophers = () => {
    return axios.get('/api/philosophers').then((response) => {
        if (response.status < 300) {
            return response;
        }
    });
};

const getUser = () => {
    return axios.post('/api/login').then((req, res) => {
        if (res.status < 300) {
            return res;
        }
    });
};

export { getPhilosophers };
