const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const seed = async () => {
  await db.sync({ force: true });
  const campuses = await Promise.all([
    Campus.create({name: 'CCNY', address: 'amsterdam ave 142nd st', description:'STAY AWAY FROM NAC ):'}),
    Campus.create({name: 'UvA', address: 'Amsterdam, NL', description:'Geschiedenis Adam'})
  ])
  const students = await Promise.all([
    Student.create({firstName: 'Primo', lastName: 'Gill', email: 'primo@gmail.com', gpa: 3.5, campusId: 1}),
    Student.create({firstName: 'Manegbe', lastName: 'Eben', email: 'eben@gmail.com', gpa: 3.9, campusId: 1}),
    Student.create({firstName: 'Oskarr', lastName: 'Gill', email: 'oskar@gmail.com', gpa: 4.0, campusId: 2})
  ])
  console.log(`
    Seeding successful!
  `);
};

module.exports = seed;
