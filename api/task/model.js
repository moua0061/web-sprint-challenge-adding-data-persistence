const db = require('../../data/dbConfig')

function getTasks(){
    return db('tasks')
}

function getTaskId(id){
    return db('tasks').where('task_id', id).first()
}

async function createNewTask(task){
    const [ task_id ] = await db('tasks').insert(task);
    return getTaskId(task_id)
}

module.exports = {
    getTasks,
    createNewTask,
    getTaskId
}
