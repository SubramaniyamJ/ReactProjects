import React, { Component } from "react";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "IamNEO",
    };
  }
  componentDidMount() {
    console.log("Component Did MOUNT!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component Will UNMOUNT!");
  }
  handleClick = () => {
    console.log("Button Clicked!");
    this.setState({
      msg: "Welcome to React",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleClick}>Change Message</button>
      </div>
    );
  }
}
export default LifeCycle;
