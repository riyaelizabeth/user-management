require('dotenv').config();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOST,
    dialect: 'postgres',
    dialectOptions: {},
    logging: process.env.NODE_ENV === 'local' ? console.log : false,
    define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    },
    operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
    },
    acquire: 20000
};