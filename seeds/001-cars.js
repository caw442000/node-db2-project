
exports.seed = function(knex) {

  const testData =[
    {VIN: '4235252452425', make: 'Chevy', model: 'Tahoe', mileage: '100009', transmission_type: 'automatic', title_status: 'salvage'},
    {VIN: '245425254524', make: 'Chevy', model: 'Tahoe', mileage: '100009', transmission_type: 'automatic', title_status: 'salvage'},
    {VIN: '2454524252525', make: 'Chevy', model: 'Tahoe', mileage: '100009', transmission_type: 'automatic', title_status: 'salvage'},
    {VIN: '425524625262', make: 'Chevy', model: 'Tahoe', mileage: '100009', transmission_type: 'automatic', title_status: 'salvage'},
    {VIN: '42545245245252', make: 'Chevy', model: 'Tahoe', mileage: '100009', transmission_type: 'automatic', title_status: 'salvage'},
    {VIN: '245425432543252', make: 'Chevy', model: 'Tahoe', mileage: '100009', transmission_type: 'automatic', title_status: 'salvage'}
  ]
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert(testData);
    });
};
