const Sequelize = require('sequelize');
const database = require('../db');
const Motorista = require('./motorista');


const Cnh = database.define('Cnh', {
    nro_cnh:{
        type: Sequelize.STRING(14),
        primaryKey: true,
        allowNull: false
    },
    tipo_cnh: Sequelize.STRING(3),
    validade: Sequelize.DATEONLY
})

//relacionamento 1:1
Cnh.belongsTo(Motorista, {
    constraint: true,
    foreignKey: 'cpf_motorista'
})

module.exports = Cnh;