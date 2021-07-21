const router = require('express').Router();
const { ProfilePage } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    // console.log({DELETEME: req.params.id});
    try {
        ProfilePage.findOne({where: {userId: req.params.id}}).then((page) => {
            res.json(page);
            // console.log(page);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { profile, user_id } = req.body;
        const { favQuote, favPhilosopher, favBook, bio, profilePic } = profile;
        const page = ProfilePage.create({
            favQuote,
            favPhilosopher,
            favBook,
            bio,
            profilePic,
            userId: user_id,
        });

        res.json(page);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

module.exports = router;
