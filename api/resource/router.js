const express = require('express')
const Resources = require('./model')
const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.createNewResource(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

module.exports = router;