const Philosopher = require('./Philosopher');
const Philosophies = require('./Philosophies');
const ProfilePage = require('./ProfilePage');
const DailyQuestion = require('./DailyQuestion');
const Quote = require('./Quote');
const Blogs = require('./Blogs');
const BlogComments = require('./BlogComments');
// eslint-disable-next-line no-unused-vars
const Test = require('./Test');
const User = require('./User');
const Comments = require('./Comments');
const Polls = require('./Polls');
const Chat = require('./Chat');
const Suggestions = require('./Suggestions');

Philosopher.hasMany(Quote, {
    foreignKey: 'philosopher_id',
    //onDelete : 'CASCADE'
});

DailyQuestion.hasMany(Comments, {
    foreignKey: 'daily_id',
});
Blogs.hasMany(BlogComments, {
    foreignKey: 'blog_id',
});
BlogComments.belongsTo(Blogs, {
    foreignKey: 'blog_id',
});
BlogComments.belongsTo(User, {
    foreignKey: 'user_id',
});
User.hasMany(BlogComments, {
    foreignKey: 'user_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
});

Quote.belongsTo(Philosopher, {
    foreignKey: 'philosopher_id',
});
BlogComments.belongsTo(User, {
    foreignKey: 'user_id',
});
//have someone check this
Comments.belongsTo(DailyQuestion, {
    foreignKey: 'daily_id',
});
Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    Philosopher,
    Blogs,
    BlogComments,
    Philosophies,
    ProfilePage,
    DailyQuestion,
    Quote,
    User,
    Polls,
    Comments,
    Chat,
    Suggestions,
    //Test,
    // Answers
};
