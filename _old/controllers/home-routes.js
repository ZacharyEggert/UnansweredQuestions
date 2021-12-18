const router = require('express').Router();
const {
    fillPhilosopherData,
    getDaysSinceJulySeventh,
    randomPicks,
} = require('../utils/handlers');
const {
    Comments,
    Philosopher,
    DailyQuestion,
    Quote,
    User,
    Chat,
    Polls,
} = require('../models');
const withauth = require('../utils/auth');
const { Op, fn, where: sWhere, col } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const quotesData = await Quote.findAll({
            include: { model: Philosopher },
            where: sWhere(fn('char_length', col('quote')), { [Op.lte]: 500 }), //WOOHOOO!
        });
        // console.log(quotesData);
        const quotes = quotesData.map((e) => {
            return e.get({ plain: true });
        });
        // console.log(quotes);

        const quoteIds = randomPicks(
            quotes.length,
            5 < quotes.length ? 5 : quotes.length
        );

        const carouselQuotes = quoteIds.map((e) => {
            // console.log(quotes[e]);
            return quotes[e];
        });
        // console.log(quoteIds);
        // console.log(carouselQuotes);

        res.render('home', {
            loggedIn: req.session.logged_in || false,
            carouselQuotes,
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/philosopher/:id', async (req, res) => {
    try {
        let philosopherData = await Philosopher.findByPk(req.params.id, {
            include: [
                {
                    model: Quote,
                },
            ],
        });

        if (!philosopherData.about || !philosopherData.youtube) {
            philosopherData = await fillPhilosopherData(
                req.params.id,
                philosopherData
            );
        }

        const philosopher = philosopherData.get({ plain: true });

        res.render('onePhilosopher', {
            philosopher,
            loggedIn: req.session.logged_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/philosophers', async (req, res) => {
    try {
        const philosophersData = await Philosopher.findAll({
            include: [
                {
                    model: Quote,
                },
            ],
        });

        const philosophers = philosophersData.map((e) =>
            e.get({ plain: true })
        );

        res.render('allPhilosophers', {
            philosophers,
            loggedIn: req.session.logged_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/quiz/', async (req, res) => {
    try {
        res.render('quiz', {
            loggedIn: req.session.logged_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/qotd/', async (req, res) => {
    try {
        const quotesData = await DailyQuestion.findByPk(
            getDaysSinceJulySeventh(),
            {
                include: [
                    {
                        model: Comments,
                        required: false,
                        include: [
                            {
                                model: User,
                            },
                        ],
                    },
                ],
            }
        );

        //console.log(quotesData);

        const quotes = quotesData.get({ plain: true });

        res.render('qotd', {
            daily_question: quotes,
            loggedIn: req.session.logged_in || false,
            currentUser: req.session.logged_name,
            currentUserId: req.session.user_id,
        });
        // console.log(quotes);
        // console.log(quotes.comments[0].user);
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

router.get('/qotd/:id', async (req, res) => {
    try {
        const quotesData = await DailyQuestion.findByPk(req.params.id, {
            include: [
                {
                    model: Comments,
                },
                {
                    model: User,
                },
            ],
        });

        const quotes = quotesData.get({ plain: true });

        res.render('qotd', {
            quotes,
            loggedIn: req.session.logged_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/poll/:id', async (req, res) => {
    try {
        const pollData = await Poll.findByPK(req.params.id, {
            include: [
                {
                    model: Poll,
                    attributes: ['id'],
                },
            ],
        });

        const poll = pollData.get({ plain: true });

        res.render('poll', {
            poll,
            logged_in: req.session.loggeed_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chat/:id', async (req, res) => {
    try {
        const chatData = await Chat.findByPK(req.params.id, {
            include: [
                {
                    model: Chat,
                    attributes: ['id'],
                },
            ],
        });

        const chat = chatData.get({ plain: true });

        res.render('chat', {
            chat,
            logged_in: req.session.loggeed_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Suggestion home route!
router.get('/suggestions', async (req, res) => {
    try {
        res.render('suggestions', {
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', withauth, async (req, res) => {
    try {
        const userData = await User.findByPK(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });

        const user = userData.get({ plain: true });

        res.render('home', {
            user,
            loggedIn: req.session.logged_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/chatroom', (req, res) => {
    res.render('joinchat', {
        userid: req.session.user_id,
        loggedIn: req.session.logged_in || false,
    });
});

router.get('/chat', (req, res) => {
    res.render('chat', {
        userid: req.session.user_id,
        loggedIn: req.session.logged_in || false,
    });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/polls', async (req, res) => {
    try {
        const pollsData = await Polls.findAll({
            order: [['updatedAt', 'DESC']],
            raw: true,
        });
        console.log(pollsData);
        // const polls = pollsData.map((e) => {
        //     e.get({ plain: true });
        // });

        // console.log(polls);

        res.render('poll', {
            polls: pollsData,
            loggedIn: req.session.logged_in || false,
            userID: req.session.user_id,
        });
    } catch (err) {
        res.status(500).json(err);
        console.error(err);
    }
});

module.exports = router;
