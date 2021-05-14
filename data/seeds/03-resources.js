exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: "Laptop", resource_description: "Something to Code With"},
    {resource_name: "Coffee", resource_description: "Energize Myself"},
    {resource_name: "Internet", resource_description: "Connect To The World Of Resources Over This Network"},
  ]);
};
