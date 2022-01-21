const db = require('../../data/dbConfig')
const { post } = require('./router')

function getTasks(){
    // const something = db('tasks')
    // const result = {
    //     task_id: something[0].task_id,
    //     task_description: something[0].task_description,
    //     task_notes: something[0].task_notes,
    //     task_completed: something[0].task_completed,
    //     project_id: something.reduce((projects, project) => {
    //         if(!project.project_id) return projects 
    //         const { project_name, project_description } = project
    //         return projects.concat({ project_name, project_description })
    //     }, [])
    // }
    // return result 
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
