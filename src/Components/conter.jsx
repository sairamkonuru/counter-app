import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   //tags: ["tag0", "tag1", "tag2"],
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement = (id) => {
  //   console.log(id);
  //   this.setState({ value: this.state.value + 1 });
  //   //console.log("Increment clicked", this.state.count);
  // };

  // handleIncrement() {
  //   console.log("Increment clicked", this.state.count);
  // }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { onDelete, onIncrement, onDecrement, counter } = this.props;
    return (
      <div>
        {/* {this.props.children} */}
        {/* <h6>{this.props.id}</h6> */}
        <span className={this.getBaggeClases()}>
          Count: {this.formatCount()}
        </span>
        <button
          //onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          //onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "Please add tags!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBaggeClases() {
    let classes = "badge m-2 badge-";
    //classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //const { value: count } = this.state;
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
