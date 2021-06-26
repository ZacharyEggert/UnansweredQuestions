const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class DailyQuestion extends Model { }

DailyQuestion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        //add a boolean for if its already been posted?
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'daily_question',
    }
);
module.exports = DailyQuestion;
