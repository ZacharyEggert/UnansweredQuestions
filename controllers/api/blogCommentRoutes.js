const router = require('express').Router();
const { BlogComments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await BlogComments.create({
            user_id: req.session.user_id,
            blog_id: req.body.blog_id,
            comment: req.body.comment,

        });

        // it will return to the commented post
        const comments = await BlogComments.findAll({
            where: {
                blog_id: req.body.blog_id,
            },
        });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const comment = await BlogComments.findAll({
            where: {
                blog_id: req.params.id,
            },
        })

        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});








module.exports = router;