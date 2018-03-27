const React = require("react");
const { gql } = require("apollo-boost");
const { graphql } = require("react-apollo");

const Characters = ({ data }) => {
  if (data.loading) return <div>Loading...</div>;
  return (
    <ul>
      {data.characters.map(character => (
        <li key={character.name}>
          {character.name}-{character.class}
        </li>
      ))}
    </ul>
  );
};

const charactersQuery = gql`
  query {
    characters {
      name
      class
    }
  }
`;

module.exports = graphql(charactersQuery)(Characters);
