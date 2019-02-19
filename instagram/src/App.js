import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: dummyData };
  } // end constructor

  addData = e => {
    e.preventDefault();
    //const
  }; // end addData()

  render() {
    return (
      <div className="App">
        <header className="header">
          <a href="insagram.com">instagram link</a>
          <div>
            <input className="search" type="search" placeholder="search..." />
            <button>search </button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons
          </a>
        </header>

        {this.state.data.map(post => (
          <PostContainer data={post} />
        ))}
      </div>
    );
  }
}

export default App;

// {
//   props.characters.map(each => (
//     <StarWars character={each} />
//   ))
// }
