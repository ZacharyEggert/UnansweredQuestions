const router = require('express').Router();
const philosopherRoutes = require('./philosopherRoutes');
const quotesRoutes = require('./quotesRoutes');
// const quizRoutes = require('./quizRoutes');
const dailyQuestionRoutes = require('./dailyquestionRoutes');
const commentsRoutes = require('./commentsRoutes');
const userRoutes = require('./userRoutes');
const pollRoutes = require('./pollRoutes');
const chatRoutes = require('./chatRoutes');
const suggestionRoutes = require('./suggestionRoutes');

router.use('/philosophers', philosopherRoutes);
router.use('/quotes', quotesRoutes);
// router.use('/quiz', quizRoutes);
router.use('/dailyquestion', dailyQuestionRoutes);
router.use('/comments', commentsRoutes);
router.use('/user', userRoutes);
router.use('/polls', pollRoutes);
router.use('/chat', chatRoutes);
router.use('/suggestions', suggestionRoutes);

module.exports = router;
