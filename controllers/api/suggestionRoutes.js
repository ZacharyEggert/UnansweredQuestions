const router = require('express').Router();
const { Suggestions, User } = require('../../models');

router.get('/', (req, res) => {
    Suggestions.findAll()
        .then((suggestions) => {
            res.json(suggestions);
        })
        .catch((err) => {
            res.status(500).json(err);
            console.error(err);
        });
});

router.post('/', async (req, res) => {
    try {
        const newSuggestion = await Suggestions.create({
            sugg_type: req.body.sugg_type,
            name: req.body.name,
            quote: req.body.quote,
            question: req.body.question,
            quotephilname: req.body.quotephilname,
        });

        res.status(200).json(newSuggestion);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.put('/:id', async (req, res) => {
    const { user_id } = req.body;
    const { id } = req.params;

    try {
        if (user_id) {
            const admin = await User.findByPk(user_id);
            if (admin.admin) {
                const suggestion = await Suggestions.findByPk(id);
                console.log(suggestion);
            } else {
                res.status(401).json({ message: 'Not authorized' });
                console.log('Not authorized');
            }
        } else {
            res.status(401).json({ message: 'Not authorized' });
            console.log('Not authorized');
        }
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const suggestion = await Suggestions.findByPk(req.params.id);
        await suggestion.destroy();
        res.status(200).json(suggestion);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

module.exports = router;
