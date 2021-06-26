module.exports = {
    purge: {
        enabled: true,
        content: [
            './views/**/*.hbs',
            './views/*.hbs',
            './public/css/*.css',
            './public/js/*.js',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
