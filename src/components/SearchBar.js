import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // To fix "this" problem, you can bind "this" or use an arrow function or put arrow fcn in onSubmit
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  // Leave off () for onchange function because you do not want to call it unless there is an event
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
