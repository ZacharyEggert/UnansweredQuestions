const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Philosophies extends Model { }

Philosophies.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        about: {
            type: DataTypes.STRING,
        },
        videoUrl: {
            type: DataTypes.STRING,
        },
        wikiLink: {
            type: DataTypes.STRING,
        },
        //maybe make this its own model
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'philosophies',
    }
);

module.exports = Philosophies;