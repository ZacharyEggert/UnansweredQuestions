

const { Philosophies } = require("../models");
const philosophyData = [
   {
      name: 'Metaphysics',
      img: 'Metaphysics.jpg'
   },
   {
      name: 'Epistemology',
      img: 'Epistemology.jpg'
   },
   {
      name: 'Ethics',
      img: 'Ethics.jpg'
   },
   {
      name: 'Philosophy of Mind',
      img: 'Philosophy-of-mind.jpg'
   },
   {
      name: 'Philosophy of History',
      img: 'Philosophy-of-history.jpg'
   },
   {
      name: 'Philosophy of Science',
      img: 'Philosophy-of-science.jpg'
   },
   {
      name: 'Aesthetics',
      img: 'Aesthetics.jpg'
   },
   {
      name: 'Logic',
      img: 'Logic.jpg'
   },
   {
      name: 'Philosophy of Politics',
      img: 'Philosophy-of-politics.jpg'
   },
   {
      name: 'Philosophy of Religion',
      img: 'Philosophy-of-religion.jpg'
   },
   {
      name: 'Philosophy of Language',
      img: 'Philosophy-of-language.jpg'
   },
   {
      name: 'Philosophy of Education',
      img: 'Philosophy-of-Education.jpg'
   },
   {
      name: 'Philosophy of Language',
      img: 'Philosophy-of-language.jpg'
   },

]

const seedPhilosophies = () => Philosophies.bulkCreate(philosophyData);
module.exports = seedPhilosophies;