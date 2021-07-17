const router = require('express').Router();
const { Philosophies } = require('../../models');
const { fillPhilosophyData } = require('../../utils/handlers');

router.get('/', async (req, res) => {
    try {
        const philData = await Philosophies.findAll({

        });
        res.status(200).json(philData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        let philData = await Philosophies.findByPk(req.params.id, {

        });

        if (!philData) {
            res.status(404).json({
                message: 'No Philosophy found with that id!',
            });
            return;
        }

        if (!philData.about || !philData.youtube) {

            // console.log({ about: philData.about, youtube: philData.youtube });

            philData = await fillPhilosophyData(
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
        const philData = await Philosophies.create(req.body);
        res.status(200).json(philData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a philosopher by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const philData = await Philosophies.update(
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
        const philData = await Philosophies.destroy({
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
