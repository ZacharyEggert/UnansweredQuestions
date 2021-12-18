module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,css,html}', './public/**/*.{js,jsx,css,html}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            cursive: ['Courgette', 'Sans'],
        },
        extend: {
            backgroundImage: (theme) => ({
                'blue-flowers':
                    'url("assets/images/background-blue-flowers.jpg")',
                'butterfly-2': 'url("assets/images/background-butterfly2.jpg")',
                leaf: 'url("assets/images/background-leaf.jpg")',
                whitecluster:
                    'url("assets/images/background-whitecluster.jpg")',
                'carousel-3': 'url("assets/images/carousel-image3_b.jpg")',
                'blue-petals':
                    'url("assets/images/background-blue-petals.jpg")',
                'butterfly-3':
                    'url("assets/images/background-butterfly-3.jpg")',
                mapleleaf: 'url("assets/images/background-mapleleaf.jpg")',
                whitedandelion:
                    'url("assets/images/background-whitedandelion.jpg")',
                'header-bg': 'url("assets/images/header-background-image.jpg")',
                branches: 'url("assets/images/background-branches.jpg")',
                daisy: 'url("assets/images/background-daisy.jpg")',
                orangeleaves:
                    'url("assets/images/background-orangeleaves.jpg")',
                whiteflower: 'url("assets/images/background-whiteflower.jpg")',
                'branches-2': 'url("assets/images/background-branches2.jpg")',
                dandelions: 'url("assets/images/background-dandelions.jpg")',
                pinkpetals: 'url("assets/images/background-pinkpetals.jpg")',
                'whiteflower-2':
                    'url("assets/images/background-whiteflower2.jpg")',
                'branches-3': 'url("assets/images/background-branches3.jpg")',
                driedflowers:
                    'url("assets/images/background-driedflowers.jpg")',
                purpleflower:
                    'url("assets/images/background-purpleflower.jpg")',
                'whiteflowers-3':
                    'url("assets/images/background-whiteflowers3.jpg")',
                brownleaf: 'url("assets/images/background-brownleaf.jpg")',
                driedleaf: 'url("assets/images/background-driedleaf.jpg")',
                redflowers: 'url("assets/images/background-redflowers.jpg")',
                yellowflower:
                    'url("assets/images/background-yellowflower.jpg")',
                'brownleaf-2': 'url("assets/images/background-brownleaf2.jpg")',
                greenleaf: 'url("assets/images/background-greenleaf.jpg")',
                sakura: 'url("assets/images/background-sakura.jpg")',
                'carousel-1': 'url("assets/images/carousel-image1_b.jpg")',
                'butterfly-2-copy':
                    "url('assets/images/background-butterfly2 - Copy.jpg')",
                'greenleaf-2': 'url("assets/images/background-greenleaf2.jpg")',
                wheat: 'url("assets/images/background-wheat.jpg")',
                'carousel-2': 'url("assets/images/carousel-image2_b.jpg")',
            }),
            keyframes: {
                'grow-in': {
                    '0%': { transform: 'scale(0);translate(-100px, -100px);' },
                    '100%': { transform: 'scale(1);translate(0,0);' },
                },
                'shrink-out': {
                    '0%': { transform: 'scale(1);translate(0,0);' },
                    '100%': { transform: 'scale(0);translate(-100px,-100px);' },
                },
            },
            animation: {
                'grow-in': 'grow-in .3s ease-out',
                'shrink-out': 'shrink-out .3s ease-out',
            },
        },
        gridTemplateColumns: {
            3: '1fr 3fr',
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        backgroundImage: true,
    },
    plugins: [],
};
