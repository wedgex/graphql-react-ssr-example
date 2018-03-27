const { graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const fs = require("fs");
const path = require("path");

const typeDefs = fs
  .readFileSync(path.join(__dirname, "typeDefs.graphql"))
  .toString();

const fakeData = [
  {
    id: 1,
    name: "Rosie",
    class: "Monk"
  },
  {
    id: 2,
    name: "K'Thriss",
    class: "Warlock"
  },
  {
    id: 3,
    name: "Walnut",
    class: "Druid"
  },
  {
    id: 4,
    name: "Donaar",
    class: "Paladin"
  },
  {
    id: 5,
    name: "Magnus",
    class: "Fighter"
  },
  {
    id: 6,
    name: "Mearle",
    class: "Cleric"
  },
  {
    id: 7,
    name: "Taako",
    class: "Wizard"
  }
];

export function create() {
  const resolvers = {
    Query: {
      characters: (_, { offset, limit }) =>
        fakeData.slice(offset, offset + limit)
    }
  };

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  return graphqlExpress({ schema });
}
