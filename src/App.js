import React, { Component } from "react";
import "./App.css";
import { fetchApi } from "./api/index";

class App extends Component {
  state = { advice: "" };

  async componentDidMount() {
    this.fetchedData();
  }

  fetchedData = async () => {
    const dataApi = await fetchApi();
    const newApi = dataApi.data.slip.advice;
    console.log(newApi);

    this.setState({ advice: newApi });
  };

  render() {
    return (
      <div className="app">
        <div className="advice-box">
          <span className="message">{this.state.advice}</span>
          <button className="button" onClick={this.fetchedData}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}

export default App;
