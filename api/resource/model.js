const db = require('../../data/dbConfig')

function getResources(){
    return db('resources')
}

function createNewResource(){
    return 'create a new resource'
}

module.exports = {
    getResources,
    createNewResource
}