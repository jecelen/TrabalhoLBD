const Sequelize = require('sequelize');
const database = require('../db');
const Motorista = require('./motorista');
const Veiculo = require('./veiculo');


const Locacao = database.define('Locacao', {
    // id:{
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    data_locacao: Sequelize.DATEONLY,
    valor: Sequelize.DECIMAL,
    status: Sequelize.STRING(10)
})


Motorista.belongsToMany(Veiculo, {through: Locacao});
Veiculo.belongsToMany(Motorista, {through: Locacao});

module.exports = Locacao;