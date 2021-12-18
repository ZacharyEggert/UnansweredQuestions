const router = require('express').Router();
const { Polls } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const pollData = await Polls.findAll();
        res.status(200).json(pollData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const pollData = await Polls.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            },
        });
        if (!pollData) {
            res.status(404).json({ message: 'No poll found with that id!' });
            return;
        }
        res.status(200).json(pollData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const pollData = await Polls.create(req.body);
        res.status(200).json(pollData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body);

        const pollData = await Polls.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!pollData) {
            res.status(404).json({ message: 'No poll found with this id!' });
            return;
        }
        console.log({ pollData });
        res.status(200).json(pollData);
    } catch (err) {
        console.error({ err });
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const pollData = await Polls.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!pollData) {
            res.status(404).json({ message: 'No poll found with this id!' });
            return;
        }

        res.status(200).json(pollData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
