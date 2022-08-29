const router = require('express').Router();
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

router.use((req, res, next) => {
    const err = new Error('API route not found!')
    err.status = 404
    next(err)
})

module.exports = router
