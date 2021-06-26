const { Philosopher } = require('../models')

const philosopherData = [

    {
        name: 'aristotle',
        img: 'Aristotle.jpg',
        period: 'ancient'
    },
    {
        name: 'marcus aurelius',
        img: 'Marcus-Aurelius.jpg',
        period: 'ancient'
    },
    {
        name: 'epicurus',
        img: 'Epicurus.jpg',
        period: 'ancient'
    },
    {
        name: 'parmenides',
        img: 'Parmenides.jpg',
        period: 'ancient'
    },
    {
        name: 'plato',
        img: 'plato.jpg',
        period: 'ancient'
    },
    {
        name: 'seneca the younger',
        img: 'Seneca.jpg',
        period: 'ancient'
    },
    {
        name: 'st. augustine',
        img: 'augustine.jpg',
        period: 'medieval'
    },
    {
        name: 'st. thomas aquinas',
        img: 'thomas-aquinas.jpg',
        period: 'medieval'
    },
    {
        name: 'rené descartes',
        img: 'Descartes.jpg',
        period: 'modern'
    },
    {
        name: 'g.w.f. hegel',
        img: 'hegel.jpg',
        period: 'modern'
    },
    {
        name: 'thomas hobbes',
        img: 'Hobbes.jpg',
        period: 'modern'
    },
    {
        name: 'david hume',
        img: 'hume.jpg',
        period: 'modern'
    },
    {
        name: 'immanuel kant',
        img: 'Kant.jpg',
        period: 'modern'
    },
    {
        name: 'kierkegaard',
        img: 'Kierkegaard.jpg',
        period: 'modern'
    },
    {
        name: 'john locke',
        img: 'John_Locke.jpg',
        period: 'modern'
    },
    {
        name: 'machiavelli',
        img: 'machiavelli.jpg',
        period: 'modern'
    },
    {
        name: 'karl marx',
        img: 'marx.jpg',
        period: 'modern'
    },
    {
        name: 'stuart mill',
        img: 'Stuart-Mill.jpg',
        period: 'modern'
    },
    {
        name: 'montesquieu',
        img: 'Montesquieu.jpg',
        period: 'modern'
    },
    {
        name: 'nietzsche',
        img: 'Nietzsche.jpg',
        period: 'modern'
    },
    {
        name: 'blaise pascal',
        img: 'Pascal.jpg',
        period: 'modern'
    },
    {
        name: 'rousseau',
        img: 'Rousseau.jpg',
        period: 'modern'
    },
    {
        name: 'marquis de sade',
        img: 'Sade.jpg',
        period: 'modern'
    },
    {
        name: 'schopenhauer',
        img: 'Schopenhauer.jpg',
        period: 'modern'
    },
    {
        name: 'adam smith',
        img: 'Adam-Smith.jpg',
        period: 'modern'
    },
    {
        name: 'baruch spinoza',
        img: 'Spinoza.jpg',
        period: 'modern'
    },
    {
        name: 'tocqueville',
        img: 'tocqueville.jpg',
        period: 'modern'
    },
    {
        name: 'voltaire',
        img: 'Voltaire.jpg',
        period: 'modern'
    },
    {
        name: 'theodor adorno',
        img: 'Adorno.jpg',
        period: 'contemporary'
    },
    {
        name: 'gaston bachelard',
        img: 'Gaston_Bachelard_1965.jpg',
        period: 'contemporary'
    },
    {
        name: 'baudrillard',
        img: 'Baudrillard.jpg',
        period: 'contemporary'
    },
    {
        name: 'albert camus',
        img: 'Camus.jpg',
        period: 'contemporary'
    },
    {
        name: 'simone de beauvoir',
        img: 'de-beauvoir-simone.jpg',
        period: 'contemporary'
    },
    {
        name: 'michel foucault',
        img: 'Foucault.jpg',
        period: 'contemporary'
    },
    {
        name: 'sigmund freud',
        img: 'sigmund-freud.jpg',
        period: 'contemporary'
    },
    {
        name: 'jürgen habermas',
        img: 'habermas.jpg',
        period: 'contemporary'
    },
    {
        name: 'friedrich hayek',
        img: 'Friedrich_Hayek.jpg',
        period: 'contemporary'
    },
    {
        name: 'martin heidegger',
        img: 'Heidegger.jpg',
        period: 'contemporary'
    },
    {
        name: 'edmund husserl',
        img: 'Husserl.jpg',
        period: 'contemporary'
    },
    {
        name: 'robert nozick',
        img: 'Nozick.jpg',
        period: 'contemporary'
    },
    {
        name: 'john rawls',
        img: 'John_Rawls.jpg',
        period: 'contemporary'
    },
    {
        name: 'jean-paul sartre',
        img: 'Sartre.jpg',
        period: 'contemporary'
    },
    {
        name: 'peter sloterdijk',
        img: 'Sloterdijk.jpg',
        period: 'contemporary'
    },
    {
        name: 'michael walzer',
        img: 'Walzer.jpg',
        period: 'contemporary'
    },

]

const seedPhilosopher = () => Philosopher.bulkCreate(philosopherData);
module.exports = seedPhilosopher;
