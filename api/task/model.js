const db = require('../../data/dbConfig')

function getTasks(){
    return db('tasks')
}

function createNewTask(){
    return 'create a new task'
}

module.exports = {
    getTasks,
    createNewTask
}
