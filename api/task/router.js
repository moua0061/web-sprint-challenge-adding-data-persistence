const express = require('express')
//import model here
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'we getting GET /api/tasks'
    })
    console.log(`we're at the GET /api/tasks end point!`)
})

module.exports = router;