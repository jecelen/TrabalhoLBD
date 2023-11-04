const Sequelize = require('sequelize');
const database = require('../db');
const Seguro = require('./seguro');
const Sede = require('./sede');


const Veiculo = database.define('Veiculo', {
    placa:{
        type: Sequelize.STRING(8),
        allowNull: false,
        primaryKey: true
    },
    modelo: {
        type: Sequelize.STRING(20),
    },
    marca: {
        type: Sequelize.STRING(20),
    },
    cor: {
        type: Sequelize.STRING(20),
    },
    ano: {
        type: Sequelize.INTEGER,
    },
    chassi:{
        type: Sequelize.STRING(18),
        allowNull: false
    },
    id_sede: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
})

Veiculo.belongsTo(Seguro, {
    constraint: true,
    foreignKey: 'nro_seguro'
})


//1:n com o hasMany em sede
Veiculo.belongsTo(Sede, { 
    constraint: true,
    foreignKey: 'id_sede'
})

Sede.hasMany(Veiculo, {
    constraint: true,
    foreignKey: 'id_sede'
})

module.exports = Veiculo;