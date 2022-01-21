const express = require('express')
const Tasks = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.createNewTask(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next)
})

module.exports = router;