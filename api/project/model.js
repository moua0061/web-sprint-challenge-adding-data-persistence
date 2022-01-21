const db = require('../../data/dbConfig')

function getProjects(){
    return db('projects')
}

function getProjectsId(id){
    return db('projects').where('project_id', id).first()
}

async function createNewProject(project){
    const [project_id] = await db('projects').insert(project);
    return getProjectsId(project_id)
}

module.exports = {
    getProjects,
    createNewProject,
    getProjectsId
}
