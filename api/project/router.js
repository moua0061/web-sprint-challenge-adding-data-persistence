const express = require('express');
// const Projects = require('./model')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'we getting GET /api/projects'
    })
    console.log(`we're at the GET /api/projects end point!`)
})

module.exports = router;