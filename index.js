var app = require("express")();
import Knex from "knex";
import { Model } from "objection";

import knexConfig from "./knexfile";
import UserAccountModel from "./UserAccountModel";

// Initialize knex.
const knex = Knex(knexConfig.development);

// Give the knex instance to objection.
Model.knex(knex);

app.get("/", async (req, res) => {
  // Select all, returns array
  const userAccounts = await UserAccountModel.query();
  console.log(userAccounts);
  res.json({ text: "hi" });
});

app.listen(3000, () => console.log("Listening on port 3000"));
