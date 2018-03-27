const React = require("react");
const { gql } = require("apollo-boost");
const { graphql } = require("react-apollo");
const CharactersContainer = require("./Container");

const LIMIT = 4;

const charactersQuery = gql`
  query($offset: Int!, $limit: Int!) {
    characters(offset: $offset, limit: $limit) {
      id
      name
      class
    }
  }
`;

module.exports = graphql(charactersQuery, {
  options: { variables: { offset: 0, limit: LIMIT } }
})(CharactersContainer);
