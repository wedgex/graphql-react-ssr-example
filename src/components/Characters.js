const React = require("react");
const { gql } = require("apollo-boost");
const { graphql } = require("react-apollo");

const LIMIT = 4;

const Characters = props => {
  if (props.data.loading) return <div>Loading...</div>;
  return (
    <React.Fragment>
      <ul>
        {props.data.characters.map(character => (
          <li key={character.id}>
            {character.name}-{character.class}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          props.data.fetchMore({
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                characters: [...prev.characters, ...fetchMoreResult.characters]
              });
            },
            variables: { offset: props.data.characters.length }
          });
        }}
      >
        Fetch More
      </button>
    </React.Fragment>
  );
};

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
})(Characters);
