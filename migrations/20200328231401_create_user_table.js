exports.up = function(knex) {
  return knex.schema.createTable("user_accounts", function(table) {
    table.increments();
    table.string("name");
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_accounts");
};
