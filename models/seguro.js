const Sequelize = require('sequelize');
const database = require('../db');



const Seguro = database.define('Seguro', {
    numeroApolice:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    valorMensalidade: {
        type: Sequelize.DECIMAL,
    },
    valorFranquia: {
        type: Sequelize.DECIMAL,
    },
    tipoCobertura: {
        type: Sequelize.STRING(20),
    },
})

module.exports = Seguro;