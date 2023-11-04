const Sequelize = require('sequelize');
const database = require('../db');
const Endereco = require('./endereco');



const Motorista = database.define('Motorista', {
    cpf:{
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    dataNasc: Sequelize.DATEONLY,

    rg: Sequelize.STRING(10)
})

//1:1
Motorista.belongsTo(Endereco, {
    constraint: true,
    foreignKey: 'id_endereco'
})


module.exports = Motorista;