import React, { Component } from "react";
import "./app.css";
import NumButton from "../widgets/buttons/numButton";

class App extends Component {
  constructor(props) {
    //  is called before component is mounted
    super(props);
    console.log("### constructor ### component lifecycle step1");

    this.state = {
      result: 0,
      current: "",
      prev: 0,
      next: 0,
      operator: "",
      numbers: [
        {
          name: 7,
          symbol: "7",
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 2,
          gridRowEnd: 3,
          action: val => this.updateCurrent(val)
        },
        {
          name: 8,
          symbol: "8",
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 2,
          gridRowEnd: 3,
          action: val => this.updateCurrent(val)
        },
        {
          name: 9,
          symbol: "9",
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 2,
          gridRowEnd: 3,
          action: val => this.updateCurrent(val)
        },
        {
          name: 4,
          symbol: "4",
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 3,
          gridRowEnd: 4,
          action: val => this.updateCurrent(val)
        },
        {
          name: 5,
          symbol: "5",
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 3,
          gridRowEnd: 4,
          action: val => this.updateCurrent(val)
        },
        {
          name: 6,
          symbol: "6",
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 3,
          gridRowEnd: 4,
          action: val => this.updateCurrent(val)
        },
        {
          name: 1,
          symbol: "1",
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 4,
          gridRowEnd: 5,
          action: val => this.updateCurrent(val)
        },
        {
          name: 2,
          symbol: "2",
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 4,
          gridRowEnd: 5,
          action: val => this.updateCurrent(val)
        },
        {
          name: 3,
          symbol: "3",
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 4,
          gridRowEnd: 5,
          action: val => this.updateCurrent(val)
        },
        {
          name: 0,
          symbol: "0",
          gridColumnStart: 1,
          gridColumnEnd: 3,
          gridRowStart: 5,
          gridRowEnd: 6,
          action: val => this.updateCurrent(val)
        },
        {
          name: ".",
          symbol: ".",
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 5,
          gridRowEnd: 6,
          action: val => this.updateCurrent(val)
        },
        {
          name: "&#247;",
          symbol: "/",
          description: "division sign",
          gridColumnStart: 4,
          gridColumnEnd: 5,
          gridRowStart: 1,
          gridRowEnd: 2,
          action: val => this.operation(val)
        },
        {
          name: "&#215;",
          symbol: "*",
          description: "multiplication sign",
          gridColumnStart: 4,
          gridColumnEnd: 5,
          gridRowStart: 2,
          gridRowEnd: 3,
          action: val => this.operation(val)
        },
        {
          name: "&#8722;",
          symbol: "-",
          description: "minus sign",
          gridColumnStart: 4,
          gridColumnEnd: 5,
          gridRowStart: 3,
          gridRowEnd: 4,
          action: val => this.operation(val)
        },
        {
          name: "&#43;",
          symbol: "+",
          description: "plus sign",
          gridColumnStart: 4,
          gridColumnEnd: 5,
          gridRowStart: 4,
          gridRowEnd: 5,
          action: val => this.operation(val)
        },
        {
          name: "&#61;",
          symbol: "=",
          description: "equal sign",
          gridColumnStart: 4,
          gridColumnEnd: 5,
          gridRowStart: 5,
          gridRowEnd: 6,
          action: () => this.showResult()
        },
        {
          name: "C",
          symbol: "C",
          description: "C",
          gridColumnStart: 1,
          gridColumnEnd: 4,
          gridRowStart: 1,
          gridRowEnd: 2,
          action: () => this.reset()
        }
      ]
    };
  }

  UNSAFE_componentWillMount() {
    //  is invoked just before mounting occurs.
    //  recommend using the constructor() instead for initializing state
    // this.setState({  })
    console.log("###     willMount    ### component lifecycle step1");
    // console.log("current props", this.props);
    // console.log("current state", this.state);
  }

  componentDidMount() {
    // is invoked immediately after a component is mounted
    // can call setState() but it will trigger extra rerendering
    console.log("###     didMount     ### component lifecycle step3");
    // console.log("current props", this.props);
    // console.log("current state", this.state);
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    // is invoked before a mounted component receives new props.
    console.log("### willReceiveProps ### component lifecycle step4");
    // console.log("new props: ", newProps);
    // console.log("current props", this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // is invoked before rendering when new props or state are being received.
    console.log("###   shouldUpdate   ### component lifecycle step5");
    // console.log("new props: ", nextProps);
    // console.log("new state: ", nextState);
    // console.log("current props", this.props);
    // console.log("current state", this.state);
    // if (this.state.current !== nextState.current) {
    //   return true;
    // } else if (this.state.prev !== nextState.prev) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }

  UNSAFE_componentWillUpdate(newProps, newState) {
    // is invoked just before rendering when new props or state are being received
    console.log("###    willUpdate    ### component lifecycle step6");
    // console.log("new props: ", newProps);
    // console.log("new state: ", newState);
    // console.log("current props: ", this.props);
    // console.log("current state: ", this.state);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // is invoked immediately after updating occurs.
    console.log("###    didUpdate     ### component lifecycle step7");
    // console.log("snapshot: ", snapshot);
    // console.log("prev props: ", prevProps);
    // console.log("prev state: ", prevState);
    // console.log("current props: ", this.props);
    // console.log("current state: ", this.state);
    console.log("current: ", this.state.current);
    console.log("prev: ", this.state.prev);
    console.log("operator: ", this.state.operator);
  }

  componentWillUnmount() {
    //  is invoked immediately before a component is unmounted and destroyed.
    // should not call setState() !important
    console.log("###   willUnmount    ### component lifecycle step8");
  }

  // functionality

  add() {
    // let temp = eval(`${this.state.prev} + ${this.state.current}`);
    let temp = Number(this.state.prev) + Number(this.state.current);
    if (temp.toString().length > 13) {
      // console.log("round");
      temp = Math.round(temp*1000000)/1000000;
    }
    // console.log("temp: ", temp);
    this.setState({ prev: temp.toString(), current: "", operator: "" });
    // console.log("operation: add finished");
    return;
  }

  subtract() {
    // let temp = eval(`${this.state.prev} - ${this.state.current}`);
    let temp = Number(this.state.prev) - Number(this.state.current);
    if (temp.toString().length > 13) {
      // console.log("round");
      temp = Math.round(temp*1000000)/1000000;
    }
    // console.log("temp: ", temp);
    this.setState({ prev: temp.toString(), current: "", operator: "" });
    // console.log("operation: add finished");
    return;
  }

  multiply() {
    // let temp = eval(`${this.state.prev} * ${this.state.current}`);
    let temp = Number(this.state.prev) * Number(this.state.current);
    if (temp.toString().length > 13) {
      // console.log("round");
      temp = Math.round(temp*1000000)/1000000;
    }
    // console.log("temp: ", temp);
    this.setState({ prev: temp.toString(), current: "", operator: "" });
    // console.log("operation: add finished");
    return;
  }

  divide() {
    // let temp = eval(`${this.state.prev} / ${this.state.current}`);
    let temp = Number(this.state.prev) / Number(this.state.current);
    if (temp.toString().length > 13) {
      // console.log("round");
      temp = Math.round(temp*1000000)/1000000;
    }
    // console.log("temp: ", temp);
    this.setState({ prev: temp.toString(), current: "", operator: "" });
    // console.log("operation: add finished");
    return;
  }

  reset() {
    this.setState({ result: 0, current: 0, symbol: "", next: 0, prev: 0 });
  }

  updateCurrent(value) {
    // console.log(value);
    // console.log(this.state.current);
    if (!this.state.current.length) {
      return this.setState({ current: value });
    }

    if (this.state.current.length) {
      return this.setState({ current: this.state.current + value });
    }
  }

  operation(value) {
    console.log(value);
    // missclick
    if (!this.state.current.length && !this.state.prev.length) {
      // console.log("missclick");
      return;
    }

    // set prev operation
    if (!this.state.prev.length) {
      // console.log("set prev operation");
      this.setState({ prev: this.state.current });
      this.setState({ current: "" });
    }

    // operator already exists
    if (this.state.operator.length) {
      // do previous operation
      if (this.state.operator === "+") {
        this.add();
      }

      if (this.state.operator === "-") {
        this.subtract();
      }

      if (this.state.operator === "*") {
        this.multiply();
      }

      if (this.state.operator === "/") {
        this.divide();
      }
    }

    // change operator
    this.setState({ operator: value });
    return;
  }

  showResult() {
    const { current, prev, operator } = this.state;

    // missclick
    if (!current.length && !prev.length) {
      return;
    }

    if (!current.length && prev.length && operator.length) {
      return this.setState({
        current: prev,
        prev: "",
        operator: ""
      });
    }

    if (current.length && prev.length && operator.length) {
      // operations
      if (operator === "+") {
        this.add();
      }

      if (operator === "-") {
        this.subtract();
      }

      if (operator === "*") {
        this.multiply();
      }

      if (operator === "/") {
        this.divide();
      }
    }

    return;
  }

  updateNext(value) {
    this.setState({ next: value });
  }

  calculate(event) {
    console.log(event.target.value);
    // this.setState({current: event.target.value})
  }

  render() {
    console.log("###      render      ### component lifecycle");

    const { current, prev, operator, numbers } = this.state;

    // console.log(current);
    // console.log(prev);

    return (
      <div className="app-container">
        {/* result window */}
        <div className="result-window">
          {prev.length && operator.length ? (
            <div className="calc_operation">
              <span>{prev}</span>
              <span>{operator}</span>
              <span>{current}</span>
            </div>
          ) : null}
          <input
            className="result"
            type="text"
            value={current === "" ? prev || 0 : current}
            readOnly
            // onChange={event => this.calculate(event)}
          />
        </div>
        {/* numbers */}
        <div className="buttons-container">
          {numbers.map((number, index) => {
            return (
              <NumButton
                key={index}
                name={number.name}
                symbol={number.symbol}
                action={number.action}
                description={number.description}
                gridColumnStart={number.gridColumnStart}
                gridColumnEnd={number.gridColumnEnd}
                gridRowStart={number.gridRowStart}
                gridRowEnd={number.gridRowEnd}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
