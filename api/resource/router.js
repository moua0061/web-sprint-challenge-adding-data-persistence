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

module.exports = router;