require('dotenv').config();
const {Sequelize}=require('sequelize');
const UserFunction=require('./models/User.js');
const CardFunction=require('./models/Card.js');

const {DB_USER,DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT}=process.env;
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);
UserFunction(sequelize);
CardFunction(sequelize);
const {User,Card}=sequelize.models;
User.belongsToMany(Card,{through: 'Favorite'});
Card.belongsToMany(User,{through: 'Favorite'});

module.exports={sequelize,...sequelize.models};