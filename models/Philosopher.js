const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Philosopher extends Model {}

Philosopher.init(
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
        period: {
            type: DataTypes.STRING,
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
        modelName: 'philosopher',
    }
);

module.exports = Philosopher;
