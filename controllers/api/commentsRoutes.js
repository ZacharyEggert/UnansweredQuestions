const router = require('express').Router();
const { Comments, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const newComment = await Comments.create({
            user_id: req.session.user_id,
            daily_id: req.body.daily_id,
            comment: req.body.comment,
        });

        // it will return to the commented post

        const allComments = await Comments.findAll({ where: { daily_id: req.body.daily_id }, include: [{ model: User, as: 'user' }] });
        const comments = allComments.map(comment => comment.get({ plain: true }));


        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

module.exports = router;
