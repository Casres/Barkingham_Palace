// import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();


const sequelize = process.env.JAWSBD_URL
        ? new Sequelize(process.env.JAWSBD_URL)
        : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        // may have to change to 127.0.0.1
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;