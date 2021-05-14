
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", (tbl)=>{
    tbl.increments("project_id")
    tbl.string("project_name").notNullable()
    tbl.string("project_description")
    tbl.boolean("project_completed").defaultTo("false")
  })
  .createTable("tasks", (tbl)=>{
    tbl.increments("task_id")
    tbl.string("task_description").notNullable()
    tbl.string("task_notes")
    tbl.boolean("task_completed").defaultTo("false")
    tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
})
.createTable("resources", (tbl)=>{
    tbl.increments("resource_id")
    tbl.string("resource_name").notNullable()
    tbl.string("resource_description")
})
.createTable("resourceassigner", (tbl)=>{
    tbl.increments("resource_assigner_id")
    tbl.integer("resource_id")
        .unsigned()    
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
    tbl.integer("project_id_one")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
    tbl.integer("project_id_two")
        .unsigned()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("resourceassigner")
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
};
