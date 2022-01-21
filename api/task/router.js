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
            if(newTask.project_completed === 0){
                res.status(201).json({
                    project_id: newTask.project_id,
                    project_name: newTask.project_name,
                    project_description: newTask.project_description,
                    project_completed: false
                })
            } else {
                res.status(201).json({
                    project_id: newTask.project_id,
                    project_name: newTask.project_name,
                    project_description: newTask.project_description,
                    project_completed: true
                })
            }
        })
        .catch(next)
})

module.exports = router;