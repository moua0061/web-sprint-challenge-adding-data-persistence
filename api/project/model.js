const db = require('../../data/dbConfig')

async function getProjects(){
    const projects = await db('projects')
    
    return projects.map(project => {
        if(project.project_completed === 0) 
        return { 
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: false
        } 
        return {
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: true
        }
    }) 
}

function getProjectsId(id){
    return db('projects').where('project_id', id).first()
}

async function createNewProject(project){
    const project_id = await db('projects').insert(project);
    return getProjectsId(project_id)
}

module.exports = {
    getProjects,
    createNewProject,
    getProjectsId
}
