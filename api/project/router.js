const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Projects.createNewProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(next)
})

module.exports = router;