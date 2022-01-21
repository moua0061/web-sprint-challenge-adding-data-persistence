const db = require('../../data/dbConfig')

function getResources(){
    return 'getting all resources'
}

function createNewResource(){
    return 'create a new resource'
}

module.exports = {
    getResources,
    createNewResource
}