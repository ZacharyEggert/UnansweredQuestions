const router = require('express').Router();
const { Blogs } = require('../../models');

// Get all blogs
router.get('/', (req, res) => {
    Blogs.findAll()
        .then((blogs) => {
            res.json(blogs);
        })
        .catch((err) => {
            res.status(500).json(err);
            console.error(err);
        });
});

//get a specific blog
router.get('/:id', (req, res) => {
    Blogs.findByPk(req.params.id)
        .then((blog) => {
            res.json(blog);
        })
        .catch((err) => {
            res.status(500).json(err);
            console.error(err);
        });
});

//delete a specific blog
router.delete('/:id', (req, res) => {
    Blogs.findByPk(req.params.id)
        .then((blog) => {
            if (blog) {
                blog.destroy()
                    .then(() => {
                        res.status(200).json({ message: 'Blog deleted' });
                    })
                    .catch((err) => {
                        res.status(500).json(err);
                        console.error(err);
                    });
            } else {
                res.status(404).json({ message: 'Blog not found' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
            console.error(err);
        });
});

//update a specific blog
router.put('/:id', (req, res) => {
    Blogs.findByPk(req.params.id)
        .then((blog) => {
            if (blog) {
                blog.update(req.body)
                    .then(() => {
                        res.status(200).json({ message: 'Blog updated' });
                    })
                    .catch((err) => {
                        res.status(500).json(err);
                        console.error(err);
                    });
            } else {
                res.status(404).json({ message: 'Blog not found' });
            }
        })
        .catch((err) => {
            res.status(500).json(err);
            console.error(err);
        });
});

module.exports = router;
