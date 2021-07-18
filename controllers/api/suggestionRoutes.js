const router = require('express').Router();
const { Suggestions } = require('../../models');

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
    try {
        console.log('APPROVE THE SUGGESTION');
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const suggestion = await Suggestions.findById(req.params.id);
        await suggestion.destroy();
        res.status(200).json(suggestion);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

module.exports = router;
