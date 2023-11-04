const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:morango@localhost:5432/postgres', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
       },
})

module.exports = sequelize;