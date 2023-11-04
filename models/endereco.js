const Sequelize = require('sequelize');
const database = require('../db');
const Motorista = require('./motorista');



const Endereco = database.define('Endereco', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    rua: {
        type: Sequelize.STRING(255),
    },
    numero: Sequelize.STRING(10),
    bairro: Sequelize.STRING(100),
    cidade: Sequelize.STRING(100),
    uf: Sequelize.STRING(3)
})


module.exports = Endereco;