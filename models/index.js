const Philosopher = require('./Philosopher');
const DailyQuestion = require('./DailyQuestion');
const Quote = require('./Quote');
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

User.hasMany(Comments, {
    foreignKey: 'user_id',
});

Quote.belongsTo(Philosopher, {
    foreignKey: 'philosopher_id',
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
