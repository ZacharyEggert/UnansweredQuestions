function withOpacity(rgb) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(${rgb}, ${opacityValue})`;
        }
        return `rgb(${rgb})`;
    };
}

/* eslint-disable quotes */
module.exports = {
    content: ['src/**/*.{tsx,ts,css,scss,sass,md,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                stone: {
                    950: withOpacity('14, 12, 11'),
                },
            },
            fontFamily: {
                cursive: ['Courgette', 'Sans'],
            },
            backgroundImage: (theme) => ({
                'blue-flowers': 'url("/images/bg/background-blue-flowers.jpg")',
                'butterfly-2': 'url("/images/bg/background-butterfly2.jpg")',
                leaf: 'url("/images/bg/background-leaf.jpg")',
                whitecluster: 'url("/images/bg/background-whitecluster.jpg")',
                'carousel-3': 'url("/images/bg/carousel-image3_b.jpg")',
                'blue-petals': 'url("/images/bg/background-blue-petals.jpg")',
                'butterfly-3': 'url("/images/bg/background-butterfly-3.jpg")',
                mapleleaf: 'url("/images/bg/background-mapleleaf.jpg")',
                whitedandelion:
                    'url("/images/bg/background-whitedandelion.jpg")',
                'header-bg': 'url("/images/bg/header-background-image.jpg")',
                branches: 'url("/images/bg/background-branches.jpg")',
                daisy: 'url("/images/bg/background-daisy.jpg")',
                orangeleaves: 'url("/images/bg/background-orangeleaves.jpg")',
                whiteflower: 'url("/images/bg/background-whiteflower.jpg")',
                'branches-2': 'url("/images/bg/background-branches2.jpg")',
                dandelions: 'url("/images/bg/background-dandelions.jpg")',
                pinkpetals: 'url("/images/bg/background-pinkpetals.jpg")',
                'whiteflower-2':
                    'url("/images/bg/background-whiteflower2.jpg")',
                'branches-3': 'url("/images/bg/background-branches3.jpg")',
                driedflowers: 'url("/images/bg/background-driedflowers.jpg")',
                purpleflower: 'url("/images/bg/background-purpleflower.jpg")',
                'whiteflowers-3':
                    'url("/images/bg/background-whiteflowers3.jpg")',
                brownleaf: 'url("/images/bg/background-brownleaf.jpg")',
                driedleaf: 'url("/images/bg/background-driedleaf.jpg")',
                redflowers: 'url("/images/bg/background-redflowers.jpg")',
                yellowflower: 'url("/images/bg/background-yellowflower.jpg")',
                'brownleaf-2': 'url("/images/bg/background-brownleaf2.jpg")',
                greenleaf: 'url("/images/bg/background-greenleaf.jpg")',
                sakura: 'url("/images/bg/background-sakura.jpg")',
                'carousel-1': 'url("/images/bg/carousel-image1_b.jpg")',
                'butterfly-2-copy':
                    "url('/images/bg/background-butterfly2 - Copy.jpg')",
                'greenleaf-2': 'url("/images/bg/background-greenleaf2.jpg")',
                wheat: 'url("/images/bg/background-wheat.jpg")',
                'carousel-2': 'url("/images/bg/carousel-image2_b.jpg")',
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
    },
    plugins: [],
};
