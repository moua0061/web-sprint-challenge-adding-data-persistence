const express = require('express');
const Projects = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            if(projects.project_completed === 0) {
                res.json({
                    project_id: projects.project_id,
                    project_name: projects.project_name,
                    project_description: projects.project_description,
                    project_completed: false
                })
            } else {
                res.json({
                    project_id: projects.project_id,
                    project_name: projects.project_name,
                    project_description: projects.project_description,
                    project_completed: true
                })
            }
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