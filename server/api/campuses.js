const router = require('express').Router();
const { useParams } = require('react-router-dom');
const {
    models: {Campus},
} = require('../db')


//all campuses

router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll();
        res.send(campuses);
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Campus.create(req.body));
    } catch (error) {
        next (error);
    }
});

//single campuses
router.delete('/:id', async (req, res, next) => {
    try {
        const campus1 = await Campus.findAll({
            where: {
                id: req.params.id
            }
        }
        );
        const campus = campus1[0];
        await campus.destroy();
        res.send(campus);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findAll({
            where : {
                id: req.params.id
            }
        })
        res.send(campus);
    } catch (error) {
        next(error);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        res.send(await campus.update(req.body));
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
