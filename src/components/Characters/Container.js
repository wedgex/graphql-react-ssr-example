const React = require("react");
const CharactersComponent = require("./Component");

module.exports = class CharactersContainer extends React.Component {
  get isLoading() {
    return this.props.data.isLoading;
  }

  get characters() {
    return this.props.data.characters;
  }

  handleFetchMore() {
    this.props.data.fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          characters: [...prev.characters, ...fetchMoreResult.characters]
        });
      },
      variables: { offset: this.characters.length }
    });
  }

  render() {
    return (
      <CharactersComponent
        isLoading={this.isLoading}
        characters={this.characters}
        onFetchMore={this.handleFetchMore.bind(this)}
      />
    );
  }
};
