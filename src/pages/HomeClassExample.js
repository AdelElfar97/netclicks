import React from "react";
import Userdata from "../components/Userdata";
import Button from "../components/Button";

class HomeClassExample extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Marina",
      position: "Frontend Developer",
      company: "Squadio",
    };
  }

  componentDidMount() {
    // console.log("DID MOUNT");
  }

  componentDidUpdate() {
    // console.log("DID UPDATE");
  }

  componentWillUnmount() {
    // console.log("Will unmount");
  }

  changeUsername = (name) => {
    // this.state.name = "Ahmed"  xxxxxxxx WRONG
    this.setState({
      name,
    });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Hello from class Component</h1>
        <hr />
        <Userdata
          // username={this.state.name}
          // position={this.state.position}
          // company={this.state.company}
          user={this.state}
        />
        <Button
          name="Change username"
          handleClick={() => this.changeUsername("Ahmed")}
        />
        <Button name="Alert" handleClick={() => alert("TEST CLICK")} />
      </>
    );
  }
}

export default HomeClassExample;
