const dotenv = require('dotenv');

const { parsed } = dotenv.config('client.env');

module.exports = {
    webpack(config, { dev, webpack }) {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );
        return config;
    },

    env: {
        ...parsed,
    },
};
