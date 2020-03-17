
exports.up = function(knex) {

  return knex.schema.createTable('cars', tbl => {
    // The critical information for each car is the VIN, make, model, and mileage.
    tbl.increments();

    tbl.integer('VIN').notNullable().unique();
    tbl.string('make', 255).notNullable().index();
    tbl.string('model', 255).notNullable().index();
    tbl.integer('mileage').notNullable();

    tbl.string('transmission_type', 255);
    tbl.string('title_status', 255);





  })
  
};

exports.down = function(knex) {

  return knex.schema.dropTableIfExists('cars');
  
};
