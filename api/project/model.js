const db = require('../../data/dbConfig')

function getProjects(){
    return db('projects')
}

async function createNewProject(project){
    //insert into projects (project_name, project_description, project_completed) values ('Another New Project', 'NEW NEW NEW NEW', 0);
    const [project_id] = await db('projects').insert(project);
    await getProjects().where(project_id).first();
}

module.exports = {
    getProjects,
    createNewProject
}
