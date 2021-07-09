const router = require('express').Router();
const { DailyQuestion } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const questData = await DailyQuestion.findAll();
        res.status(200).json(questData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/today', async (req, res) => {
    try {
        const questData = await DailyQuestion.findAll();
        res.status(200).json(questData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const questData = await DailyQuestion.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            },
        });
        if (!questData) {
            res.status(404).json({ message: 'No question found with that id!' });
            return;
        }
        res.status(200).json(questData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const questData = await DailyQuestion.create(req.body);
        res.status(200).json(questData);
    } catch (err) {
        res.status(400).json(err);
    }
});



router.put('/:id', async (req, res) => {
    try {
        const questData = await DailyQuestion.update({
            question: req.body.question,
        },
            {
                where: {
                    id: req.params.id,
                },
            },
        );

        if (!questData) {
            res.status(404).json({ message: "No question found with this id!" });
            return;
        }
        res.status(200).json(questData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const questData = await DailyQuestion.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!questData) {
            res.status(404).json({ message: 'No question found with this id!' });
            return;
        }

        res.status(200).json(questData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;