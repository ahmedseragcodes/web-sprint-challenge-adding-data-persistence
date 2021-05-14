exports.seed = function(knex) {
  return knex('resourceassigner').insert([
    {resource_id: 1, project_id_one: 1, project_id_two: 2,},
    {resource_id: 2, project_id_one: 2, project_id_two: 2,},
    {resource_id: 3, project_id_one: 1}, //testing just applying to one to ensure it's working properly 
  ]);
};

