const router = require('express').Router();
const { Chat } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const chatData = await Chat.findAll();
        res.status(200).json(chatData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
