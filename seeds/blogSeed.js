const { Blogs } = require('../models');

const blogData = [
    {
        userName: 'testuser',
        title: 'test title whatever works here4',
        content:
            'fjksdfklsdj fsdklfjksd fjsdklfjlsd fjwsdklsfj fsdkljfdls jfsldkjf fjsdlkfj sdljkflsdc sdfjklsdf sdkljfskld lsdkjfs lksdjflsd klsdjfkl klsdfjl fsdjklfl',
    },
    {
        userName: 'testuser1',
        title: 'test title whatever works here3',
        content:
            'fjksdfklsdj fsdklfjksd fjsdklfjlsd fjwsdklsfj fsdkljfdls jfsldkjf fjsdlkfj sdljkflsdc sdfjklsdf sdkljfskld lsdkjfs lksdjflsd klsdjfkl klsdfjl fsdjklfl',
    },
    {
        userName: 'testuser2',
        title: 'test title whatever works here1',
        content:
            'fjksdfklsdj fsdklfjksd fjsdklfjlsd fjwsdklsfj fsdkljfdls jfsldkjf fjsdlkfj sdljkflsdc sdfjklsdf sdkljfskld lsdkjfs lksdjflsd klsdjfkl klsdfjl fsdjklfl',
    },
];

const blogSeed = () => Blogs.bulkCreate(blogData);
module.exports = blogSeed;
