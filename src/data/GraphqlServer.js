const { graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const fs = require("fs");
const path = require("path");

console.log(__dirname);
const typeDefs = fs
  .readFileSync(path.join(__dirname, "typeDefs.graphql"))
  .toString();

const fakeData = [
  {
    name: "Rosie",
    class: "Monk"
  }
];

export function create() {
  const resolvers = {
    Query: { characters: () => fakeData }
  };

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  return graphqlExpress({ schema });
}
