const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comments.create({
            user_id: req.session.user_id,
            daily_id: req.body.daily_id,
            comment: req.body.comment
        });
        // it will return to the commented post

        res.status(200).json(newComment);

    } catch (err) {
        res.status(500).json(err);
        console.error(err)
    }
});


module.exports = router;
