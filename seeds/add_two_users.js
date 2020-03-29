exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user_accounts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_accounts").insert([
        { name: "Patty Smith" },
        { name: "Bob Dylan" }
      ]);
    });
};
