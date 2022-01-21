const db = require('../../data/dbConfig')

function getProjects(){
    return db('projects')
}

async function createNewProject(project){
    //insert into projects (project_name, project_description, project_completed) values ('Another New Project', 'NEW NEW NEW NEW', 0);
    return await db('projects').insert(project);
}

module.exports = {
    getProjects,
    createNewProject
}
