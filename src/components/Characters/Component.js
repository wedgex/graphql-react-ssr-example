const React = require("react");

module.exports = ({ isLoading, characters = [], onFetchMore }) =>
  isLoading ? (
    <div>Loading...</div>
  ) : (
    <React.Fragment>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.name}-{character.class}
          </li>
        ))}
      </ul>
      <button onClick={onFetchMore}>Fetch More</button>
    </React.Fragment>
  );
