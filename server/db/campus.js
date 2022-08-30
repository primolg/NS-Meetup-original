const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        notEmpty: true,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://www.appropedia.org/w/images/8/82/Nac_boundary.png",
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        notEmpty: true,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
    }
})