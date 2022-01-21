const express = require('express');
//import routers
const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');
const tasksRouter = require('./task/router');

const server = express();

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.use(express.json());

server.use('*/', (req, res) => {
    res.send(`<h1>hello world</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})


module.exports = server;
