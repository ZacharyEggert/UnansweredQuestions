const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProfilePage extends Model { }

ProfilePage.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    profilePic: {
        type: DataTypes.STRING,
        setdefault: '',
    },
    favQuote: {
        type: DataTypes.TEXT,
        setdefault: '',
    },
    favPhilosopher: {
        type: DataTypes.STRING,
        setdefault: '',
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profilepage',

    })


module.exports = ProfilePage;




