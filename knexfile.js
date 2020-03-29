// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgresql://postgres@localhost/zero_dev",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
