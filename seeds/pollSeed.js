const { Polls } = require('../models');

const pollData = [
    {
        pollName: 'The Trolley Problem',
        pollText:
            'There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks, there are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolley will switch to a different set of tracks. However, you notice that there is one person on the side track. Do you pull the lever, diverting the trolley onto the side track where it will kill one person?',
    },
    {
        pollName: 'The Teleportation Dillema',
        pollText:
            'A person steps into a teleportation machine.  The first part of the teleportation machine scans the persons body and then vaporizes it, destroying it completely.  The second part of the transportation machine then prints out an identical version of the person, using some bio-inks they had on hand.  The copy has all the same mental and physical attributes of the original along with all the memories of their original.  Is the individual at the other end of the teleporter the same person that went in?',
    },
    {
        pollName: 'Self-Driving Ethics',
        pollText:
            'You are programming a self-driving car.  If five people run out onto the highway, you can program it to swerve off the road and kill the driver or run down the five individuals crossing the road. Do you program it to kill the five people and keep the driver safe?',
    },
    {
        pollName: 'Hidden Awareness',
        pollText: 'Is there any way we can truly determine if AI is conscious?',
    },
    {
        pollName: 'Damnation for freedom',
        pollText:
            'You are a prisoner serving 20 years to life. You are given the option to create an exact replica of your consciousness that will be taken by the prison to endure the worst torture imaginable in a simulated world. If you agree you will be freed immediately. Do you take the offer for your freedom? ',
    },
    {
        pollName: 'The Experience Machine',
        pollText:
            'Suppose there were an experience machine that would give you any experience you desired. In this machine you could believe that you were a best selling author, a famous actor or whatever else your heart desired. But once you enter the machine you can never interface with the real world again. Would you enter the machine?',
    },
    {
        pollName: 'The Silent Sound',
        pollText:
            'If a tree falls in the woods with nothing to hear it hit the ground does it make a sound?',
    },
    {
        pollName: 'The Nuerologists dillema ',
        pollText:
            'If someone is in a completely vegitative state with no brain activity are they still alive in a philisophical sense?',
    },
    {
        pollName: 'Grave Odds',
        pollText:
            'You are given an offer. If you accept it you will have a 98% chance to get 10 million dollars, but there is also a 2% chance that the person closest to you will die and you will get nothing. Do you take the offer?',
    },
];
const seedPolls = () => Polls.bulkCreate(pollData);
module.exports = seedPolls;
