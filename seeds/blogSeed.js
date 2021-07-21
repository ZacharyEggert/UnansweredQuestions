const { Blogs } = require('../models');

const blogData = [
    {
        userName: 'Siddhartha',
        title: 'lessons from suffering',
        content:
            'What is the hardest lesson you have ever had to learn in your life?',
    },
];

const blogSeed = () => Blogs.bulkCreate(blogData);
module.exports = blogSeed;
