const db = require('../../data/dbConfig')

function getTasks(){
    return 'getting all tasks'
}

function createNewTask(){
    return 'create a new task'
}

module.exports = {
    getTasks,
    createNewTask
}
