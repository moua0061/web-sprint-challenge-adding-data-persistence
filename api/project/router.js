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
            if(newProject.project_completed === 0){
                res.status(201).json({
                    project_id: newProject.project_id,
                    project_name: newProject.project_name,
                    project_description: newProject.project_description,
                    project_completed: false
                })
            } else {
                res.status(201).json({
                    project_id: newProject.project_id,
                    project_name: newProject.project_name,
                    project_description: newProject.project_description,
                    project_completed: true
                })
            }
        })
        .catch(next)
})

module.exports = router;