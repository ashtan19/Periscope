import React from "react";

import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import "./App.css";

class App extends React.Component {
  state = { images: [] };

  // Async function for APIs. make the function an arrow fcn to bind "this"
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <h1 className="ui header">
          <div className="Title">
            Periscope
            <div className="sub header">What do you wish to see?</div>
          </div>
        </h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
