exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: "Learn React Native", project_description: "Learn React Native With Youtube Tutorials, Docs, and By Building Apps", project_completed: false},
    {project_name: "Excel At Design", project_description: "Take Advanced CSS Courses & Implement What You Learn In Projects", project_completed: false},
  ]);
};

