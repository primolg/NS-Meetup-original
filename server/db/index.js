  // The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')
const Seed = require('./seed');

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
    // Include your models in this exports object as well!
    db,
    Seed,
    models: {
      Student,
      Campus
    }

}