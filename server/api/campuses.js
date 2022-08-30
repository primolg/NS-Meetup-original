const router = require('express').Router();
const { useParams } = require('react-router-dom');
const {
    models: {Campus},
} = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll();
        res.send(campuses);
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
    const id = Number(req.params.id)
    try {
        const campus = await Campus.findAll({
            where : {
                id: id
            }
        })
        res.send(campus)
    } catch (error) {
        next(error);
    }
})

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
})

module.exports = router
