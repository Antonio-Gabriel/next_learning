import { Client } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});

export const faunaClient = (secret) =>
  new Client({
    secret,
  });
