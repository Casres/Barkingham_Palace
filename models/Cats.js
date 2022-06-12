// animals that are currently in the system
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cats extends Model {}

Cats.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'owners',
                key: 'id'
            }
        }
    }
)

module.exports = Cats;