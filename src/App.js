//import logo from "./logo.svg";
import React, { Component } from "react";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 44 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counterId) => {
    //console.log("delete event habdler called : " + counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    const {
      handleReset,
      handleIncrement,
      handleDecrement,
      handleDelete,
    } = this;
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onReset={handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
