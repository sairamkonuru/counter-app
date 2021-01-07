import React, { Component } from "react";
import Counter from "./conter";

class Counters extends Component {
  render() {
    const {
      onDelete,
      onIncrement,
      onReset,
      onDecrement,
      counters,
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            //onIncrement={this.props.onIncrement}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
