const router = require('express').Router();
const apiRoutes = require('./api');
// eslint-disable-next-line no-unused-vars
const homeRoutes = require('./home-routes');
const path = require('path');

router.use('/api', apiRoutes);

router.get('/*', (req, res) => {
    try {
        res.sendFile(path.join(__dirname,'..', 'client', 'build', 'index.html'));
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
