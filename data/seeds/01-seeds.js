
const projects = [
  { 
    project_name: 'TV DIY', 
    project_description: 'Build a 5 foot book shelf horizontal on top of the tv in the living room', 
    project_completed: 0,
  },
  {
    project_name: 'Morning Runs', 
    project_description: 'Practice waking up early to go for  1-2 miles run', project_completed: 0
  },
  {
    project_name: 'Kayak 2022', 
    project_description: 'Build a 2-person kayak', 
    project_completed: 1,
  },
]

const resources = [
  {
    resource_name: 'Youtube', 
    resource_description: 'Watch a YouTube video on how to build the damn shelf'
  },
  {
    resource_name: 'Runners Magazine', 
    resource_description: 'read magazines'
  },
  {
    resource_name: 'REI', 
    resource_description: 'Take evening class at REI on how-to'
  },
]

const tasks = [
  {
    task_description: 'Buy plywood', 
    task_notes: 'Go to Home Depot', 
    task_completed: 1
  },
]

const project_resources = [
  {
    project_id: 1, 
    project_name: 'TV DIY', 
    project_completed: 0, 
    resource_name: 'Youtube', 
    resource_id: 1
  }
]

exports.seed = function(knex){
  knex('projects ').insert(projects )
  knex('resources').insert(resources)
  knex('tasks').insert(tasks)
  knex('project_resources').insert(project_resources)
}
