import React, { Component } from "react";
import "./App.css";
import Parent from './components/parentToChild/parent'
class App extends Component {
  state = {
    title: "sample title",
  };
  changeTheWorld = (newTitle) => {
    this.setState({ title: newTitle });
  };
  render() {
    return (
      <div className="App">
        <Parent
          changeEvent={this.changeTheWorld.bind(this, "new title")}
          noChangeEvent = {this.changeTheWorld.bind(this,'same title')}
          title={this.state.title}
        />
      </div>
    );
  }
}

export default App;
