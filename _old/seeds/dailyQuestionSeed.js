const { DailyQuestion } = require('../models');

const questionData = [
    {
        question: 'Are there things that are inherently right or wrong?',
    },
    {
        question: 'Is there a meaning to life? ',
    },
    {
        question: 'Is ignorance bliss?',
    },
    {
        question: 'What is a good life?',
    },
    {
        question: 'What is your conception of god?',
    },
    {
        question: 'Are there any "correct" answers in philosphy?',
    },
    {
        question: 'Is there life after death?',
    },
    {
        question: 'Does God exist?',
    },
    {
        question: 'What is the best moral system?',
    },
    {
        question: 'Is our universe real?',
    },
    {
        question: 'Can we ever know anything about the true nature of reality?',
    },
    {
        question: 'Is free will an illusion?',
    },
    {
        question: 'Do the ends justify the means?',
    },
    {
        question: 'Is life free of suffering possible?',
    },
    {
        question: 'What is the value of art?',
    },
    {
        question:
            'If you could teach everyone on the planet a single lesson what would it be?',
    },
    {
        question: 'What is the difference between intelligence and wisdom?',
    },
    {
        question:
            'Is there inherent order in nature or is it all chaos and chance?',
    },
    {
        question: 'What is freedom?',
    },
    {
        question: 'Is torture ever justified?',
    },
    {
        question: 'Which is more important, to be respected or liked?',
    },
    {
        question:
            'If someone is killing themselves or someone else and you simply watch and refuse to interfere, are you responsible for that death?',
    },
    {
        question: 'At what point is an individual considered elderly',
    },
    {
        question: 'Is it better to be happy or fulfilled',
    },
    {
        question: 'Is death something to be sad about? If so why?',
    },
    {
        question:
            'Is death worse for the person it happens to, or the people around them?',
    },
    {
        question: 'What is a soulmate?',
    },
    {
        question: "What is love? (baby don't hurt me)",
    },
    {
        question: 'What is a spirit?',
    },
    {
        question: 'Does anything have an inherent value?',
    },
    {
        question: 'What is a good friend?',
    },
    {
        question: 'When is it acceptable to commit suicide?',
    },
    {
        question: 'Does absolute power corrupt absolutely?',
    },
    {
        question:
            'Does knowledge have intrinsic value or does it need to have a practical use to have value?',
    },
    {
        question: 'What is the biggest waste of human potential?',
    },
    {
        question: 'What do you think your future self would think about you?',
    },
    {
        question: 'Is an unexamined life worth living?',
    },
    {
        question: 'If you had the option to become immortal, would you?',
    },
    {
        question: 'Is human life inherently valuable?',
    },
    {
        question:
            'In a society where it is possible to avoid eating meat is it morally wrong to continue killing animals for ephemeral pleasure?',
    },
    {
        question: 'Are humans fundamentally good or evil?',
    },
    {
        question: 'Can ignorance be useful?',
    },
];

const seedQuestions = () => DailyQuestion.bulkCreate(questionData);

module.exports = seedQuestions;
