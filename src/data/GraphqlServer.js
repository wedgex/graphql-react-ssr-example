const { graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const fs = require("fs");
const path = require("path");
const characters = require("./characters");

const typeDefs = fs
  .readFileSync(path.join(__dirname, "typeDefs.graphql"))
  .toString();

export function create() {
  const resolvers = {
    Query: {
      characters: (_, { offset, limit }) =>
        characters.slice(offset, offset + limit)
    }
  };

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  return graphqlExpress({ schema });
}
