import React, { Component } from "react";

class Counter extends Component {

  // Testing:
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('prevProps', prevProps);
  //   console.log('prevState', prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     // AJAX call and get new data from the server
  //   }
  // }

  // // Testing Optimization
  // componentWillUnmount() {
  //   console.log('Counter - Unmount');
  // }


  // Have to use this because other method with ARROW FUNCTION handle increment was breaking
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // experimental arrow function not needed for reset button ONWARD
  // handleIncrement = () => {

  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {

    // Testing:
    // console.log('Counter - Rendered');

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className='btn btn-secondary btn-sm'
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className='btn btn-secondary btn-sm m-2 '
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >Delete
          </button>
        </div>

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }


  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
