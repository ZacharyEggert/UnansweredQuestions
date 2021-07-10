const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        console.log(userData.get({ plain: true }));

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            //when username saved upon signup, saved as logged_name
            req.session.logged_name = userData.user_name;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
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
            res.status(400).json({
                message: 'Incorrect username or password, please try again',
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect username or password, please try again',
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            // with login, logged_name saved to session that we can use with handlebars
            req.session.logged_name = userData.user_name;
            res.json({ user: userData, message: 'You are now logged in' });
        });
    } catch (err) {
        res.status(400).json(err);
        console.error(err);
    }
});

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
