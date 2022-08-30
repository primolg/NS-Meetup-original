// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const syncAndSeed = async () => {
    await db.sync({ force: true });
    const students = await Promise.all([
      Student.create({firstName: 'Primo', lastName: 'Gill', email: 'primo@gmail.com', gpa: 3.5}),
      Student.create({firstName: 'Manegbe', lastName: 'Eben', email: 'eben@gmail.com', gpa: 3.9}),
      Student.create({firstName: 'Oskarr', lastName: 'Gill', email: 'oskar@gmail.com', gpa: 4.0})
    ])
    const campuses = await Promise.all([
      Campus.create({name: 'CCNY', address: 'amsterdam ave 142nd st', description:'STAY AWAY FROM NAC ):'}),
      Campus.create({name: 'UvA', address: 'Amsterdam, NL', description:'Geschiedenis Adam'})
    ])
    console.log(`
    Seeding successful!
  `);
};

Student.belongsTo(Campus, { as: 'student', foreignKey: 'campusID'});
Campus.hasMany(Student, { as: 'campus'});

module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    models: {
      Student,
      Campus
    }

}