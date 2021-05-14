exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_description: "Find A React Native Tutorial", task_notes: "Choose Something Exciting So You're Focused", task_completed: false, project_id: 1},
    {task_description: "Buy CSS For Javascript Developers", task_notes: "Set Aside A Week To Really Dedicate To This", task_completed: false, project_id: 2},
  ]);
};
