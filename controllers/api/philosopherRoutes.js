const router = require('express').Router();
const { Quote, Philosopher } = require('../../models');
const { fillPhilosopherData } = require('../../utils/handlers');

router.get('/', async (req, res) => {
    try {
        const philData = await Philosopher.findAll({
            include: [{ model: Quote }],
        });
        res.status(200).json(philData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let philData = await Philosopher.findByPk(req.params.id, {
            include: [{ model: Quote }],
        });

        if (!philData) {
            res.status(404).json({
                message: 'No philosopher found with that id!',
            });
            return;
        }

        if (!philData.about || !philData.youtube) {

            // console.log({ about: philData.about, youtube: philData.youtube });

            philData = await fillPhilosopherData(
                req.params.id,
                philData
            );
        }

        // console.log(philData);

        res.status(200).json(philData);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

//create a philosopher
router.post('/', async (req, res) => {
    try {
        const philData = await Philosopher.create(req.body);
        res.status(200).json(philData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a philosopher by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const philData = await Philosopher.update(
            {
                name: req.body.name,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!philData) {
            res.status(404).json({
                message: 'No philosopher found with this id!',
            });
            return;
        }
        res.status(201).json(philData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//delete a philosopher
router.delete('/:id', async (req, res) => {
    try {
        const philData = await Philosopher.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!philData) {
            res.status(404).json({
                message: 'No philosopher found with this id!',
            });
            return;
        }

        res.status(200).json(philData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
