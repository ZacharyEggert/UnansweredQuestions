const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Quote extends Model {}

Quote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quote: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        philosopher_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'philosopher',
                key: 'id',
            },
        },
    },
    {
        hooks: {
            afterFind: (dbQuote) => {
                // console.log(dbQuote);
                try {
                    let newdbQuote = dbQuote.map((e) => {
                        e.quote = e.quote
                            .replace(/^"(.+)"$/, '$1')
                            .replace(/\"\"/g, '"');
                        return e;
                    });
                    return newdbQuote;
                } catch (err) {
                    console.error(err);
                }
                try {
                    let newdbQuote = dbQuote;
                    newdbQuote.quote = newdbQuote.quote
                        .replace(/^"(.+)"$/, '$1')
                        .replace(/\"\"/g, '"');
                } catch (err) {
                    console.error(err);
                }
                return dbQuote;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quote',
    }
);
module.exports = Quote;
