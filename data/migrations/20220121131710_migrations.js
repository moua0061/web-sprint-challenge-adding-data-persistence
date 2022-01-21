
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.text('project_name').notNullable().unique()
            table.text('project_description')
            table.integer('project_completed').defaultTo(0)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.text('resource_name').notNullable().unique()
            table.text('resource_description')
        })
        .createTable('tasks', table => {
            table.increments('task_id')
            table.text('task_description').notNullable()
            table.text('task_notes`')
            table.integer('ask_completed').defaultTo(0)
        })
        .createTable('project_resources', table => {
            table.increments('project_resources_id')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
            table.text('project_name')
                .unsigned()
                .notNullable()
                .references('project_name')
                .inTable('projects')
            table.integer('project_completed')
                .unsigned()
                .notNullable()
                .references('project_completed')
                .inTable('projects')
            table.text('resource_name')
                .unsigned()
                .notNullable()
                .references('resource_name')
                .inTable('resources')
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource_id')
                .inTable('resources')
        })
};

exports.down = function(knex) {
    knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
