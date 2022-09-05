const router = require('express').Router();
const {
    models: {Student},
} = require('../db')


//all students

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.send(students);
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Student.create(req.body));
    } catch (error) {
        next(error);
    }
});

//single students

router.delete('/:id', async (req, res, next) => {
    try {
        const student1 = await Student.findAll({
            where: {
                id: req.params.id
            }
        }
        );
        const student = student1[0];
        await student.destroy();
        res.send(student);
    } catch (error) {
        next(error);
    }
});


router.get('/:id', async (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const student = await Student.findAll({
            where : {
                id: id
            }
        })
        res.send(student);
    } catch (error) {
        next(error);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id);
        res.send(await student.update(req.body));
    } catch (error) {
        next(error);
    }
});



router.use((req, res, next) => {
    const err = new Error('API route not found!');
    err.status = 404;
    next(err);
})

module.exports = router;