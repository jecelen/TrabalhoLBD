const Sequelize = require('sequelize');
const database = require('../db');



const Sede = database.define('Sede', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cidade: Sequelize.STRING(100),
    uf: Sequelize.STRING(3),
    telefone: Sequelize.STRING(20)
})


module.exports = Sede;