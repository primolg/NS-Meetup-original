const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        notEmpty: true,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        notEmpty: true,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
        notEmpty: true,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://cdn.w600.comps.canstockphoto.com/enthusiastic-student-draw-illustration_csp73933328.jpg",
    },
    gpa: {
        type: Sequelize.FLOAT(0, 4),
    },
    
})


