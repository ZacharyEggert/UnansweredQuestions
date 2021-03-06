const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Blogs extends Model {}

Blogs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10, 1000],
            },
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },

        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogs',
    }
);

module.exports = Blogs;
