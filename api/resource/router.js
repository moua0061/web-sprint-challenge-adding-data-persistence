const express = require('express')
//import model here
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'we getting GET /api/resources'
    })
    console.log(`we're at the GET /api/resources end point!`)
})

module.exports = router;