const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        console.log(userData.get({ plain: true }));

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            //when username saved upon signup, saved as logged_name
            req.session.logged_name = userData.user_name;
            res.status(200).json({ user: userData.get({ plain: true }) });
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);

        const userData = await User.findOne({
            where: { user_name: req.body.user_name },
        });
        if (!userData) {
            res.status(404).json({
                message: 'Incorrect username or password, please try again',
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(404).json({
                message: 'Incorrect username or password, please try again',
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.remember = req.body.remember;
            // with login, logged_name saved to session that we can use with handlebars
            req.session.logged_name = userData.user_name;
            res.json({ user: userData, message: 'You are now logged in' });
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).redirect('/');
            console.log('User is now logged out');
        });
    } else {
        console.warn('User not logged in: attempted to log out.');
        res.status(404).end();
    }
});

router.get('/', (req, res) => {
    User.findAll({
        attributes: ['id', 'user_name', 'email', 'admin'],
    })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json(err);
            console.error(err);
        });
});

router.post('/validatesession', (req, res) => {
    // console.log({ req });
    if (req.session.logged_in && req.session.remember) {
        User.findByPk(req.session.user_id)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                res.status(500).json(err);
                console.error(err);
            });
    } else {
        res.status(401).json({
            message: 'Session not remembered',
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        // console.log(req.params.id);
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            console.log(userData);
            res.status(404).json({
                message: 'User not found',
            });
            return;
        }
        userData.update(req.body);
        userData.save();
        console.log('User updated');
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { id: req.params.id },
        });
        if (!userData) {
            res.status(404).json({
                message: 'User not found',
            });
            return;
        }
        userData.destroy();
        console.log('User deleted');
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

module.exports = router;
