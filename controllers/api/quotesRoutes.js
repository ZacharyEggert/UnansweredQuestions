const router = require('express').Router();
const { Quote, Philosopher } = require('../../models');

router.get('/', async (req, res) => {
    // find all quotes
    try {
        const quoteData = await Quote.findAll({
        });
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one quote by its `id` value
    try {
        const quoteData = await Quote.findByPk(req.params.id, {
            where: { id: req.params.id },
            include: [{ model: Philosopher }],
        });

        if (!quoteData) {
            res.status(404).json({ message: 'No quotes found with this id!' });
            return;
        }

        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new quote
    try {
        const quoteData = await Quote.create({
            philosopher_id: req.body.philosopher_id,
        });
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a quote by its `id` value
    try {
        const quoteData = await Quote.update(
            {
                quote: req.body.quote,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!quoteData) {
            res.status(404).json({ message: 'No quote found with this id!' });
            return;
        }
        res.status(201).json(quoteData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a quote by its `id` value
    try {
        const quoteData = await Quote.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!quoteData) {
            res.status(404).json({ message: 'No quotes found with this id!' });
            return;
        }
        res.status(200).json(quoteData);
    } catch (err) {
        res.status(403).json(err);
        console.log('Cannot delete quotes associated with philosophers');
    }
});

module.exports = router;
