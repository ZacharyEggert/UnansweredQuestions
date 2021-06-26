const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Suggestions extends Model {}

Suggestions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        sugg_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        quote: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        quotephilname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'suggestions',
    }
);

module.exports = Suggestions;
