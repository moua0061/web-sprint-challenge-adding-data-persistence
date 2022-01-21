const db = require('../../data/dbConfig')

function getResources(){
    return db('resources')
}

function getResourcesId(id){
    return db('resources').where('resource_id', id).first()
}

async function createNewResource(resource){
    //insert into resources (resource_name, resource_description) values ('new resource', 'new shit');
    const [ resource_id ] = await db('resources').insert(resource);
    return getResourcesId(resource_id)
}

module.exports = {
    getResources,
    createNewResource,
    getResourcesId
}