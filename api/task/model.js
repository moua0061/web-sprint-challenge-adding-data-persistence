const db = require('../../data/dbConfig')

async function getTasks(){
    const tasks = await db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
    
    return tasks.map(task => {
        if(task.task_completed === 0) {
            return {
                task_id: task.task_id,
                task_description: task.task_description,
                task_notes: task.task_notes,
                task_completed: false,
                project_name: task.project_name,
                project_description: task.project_description
            }
        } else {
            return {
                task_id: task.task_id,
                task_description: task.task_description,
                task_notes: task.task_notes,
                task_completed: true,
                project_name: task.project_name,
                project_description: task.project_description
            }
        }
    })
}

function getTaskId(id){
    return db('tasks').where('task_id', id).first()
}

async function createNewTask(task){
    const [task_id] = await db('tasks').insert(task)
    const something = getTaskId(task_id)
        if(something.task_completed === 0){
            return {
                task_id: something.task_id,
                task_description: something.task_description,
                task_notes: something.task_notes,
                task_completed: false,
                project_id: something.project_id
            }
        } else {
            return {
                task_id: something.task_id,
                task_description: something.task_description,
                task_notes: something.task_notes,
                task_completed: true,
                project_id: something.project_id
            }
        }
}

module.exports = {
    getTasks,
    createNewTask,
    getTaskId
}
