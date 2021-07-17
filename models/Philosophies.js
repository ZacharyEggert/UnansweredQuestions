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
            type: DataTypes.TEXT,
            allowNull: true,
        },
        videoUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        wikiLink: {
            type: DataTypes.STRING,
            allowNull: true,
        },
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
