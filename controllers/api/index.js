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
const philosophyRoutes = require('./philosophyRoutes');
const blogRoutes = require('./blogRoutes');
const blogCommentRoutes = require('./blogCommentRoutes');

router.use('/philosophers', philosopherRoutes);
router.use('/quotes', quotesRoutes);
// router.use('/quiz', quizRoutes);
router.use('/blog', blogRoutes);
router.use('/dailyquestion', dailyQuestionRoutes);
router.use('/comments', commentsRoutes);
router.use('/user', userRoutes);
router.use('/polls', pollRoutes);
router.use('/chat', chatRoutes);
router.use('/suggestions', suggestionRoutes);
router.use('/philosophies', philosophyRoutes);
router.use('/blogcomments', blogCommentRoutes);

module.exports = router;
