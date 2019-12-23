import React from "react";

class Headline extends React.Component {
  constructor(props) {
    super(props);
    console.log("###    constructor   ### component lifecycle step1");
    // this.state = {
    //   count: props.count
    // };
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

  render() {
    console.log("###      render      ### component lifecycle");
    return <h3>you clicked the button {this.props.count} times</h3>;
  }
}

export default Headline;