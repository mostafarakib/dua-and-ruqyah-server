const knex = require("knex");

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "dua_main.sqlite",
  },
  useNullAsDefault: true,
});

module.exports = connectedKnex;
