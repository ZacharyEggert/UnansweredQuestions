const router = require('express').Router();
const { Suggestions } = require('../../models');

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

module.exports = router;
