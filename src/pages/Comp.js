import React, { Component }  from 'react';
/*
const Comp = () => {
  return <h1>Component</h1>
};
*/

//Using class component
class Comp extends React.Component{
  constructor(props){
    super(props);
    this.state = {msg: "Class Component value in state." , color: "blue"};
  }
  changeColor = () => {
    console.log("in change color");
    this.setState({color: "yellow"});
    //this.state.color = "yellow";
    console.log("exiting change color :" + this.state.color);
  }
  render(){
      //this.state.color = this.props.color;
      console.log("in render");
      return (
        <>
          <h1>Class Component</h1>
          <h3>{this.state.msg}</h3>
          <h3>Value from call as prop is : {this.props.color}</h3>
          <h3>Value from call updated in state as : {this.state.color}</h3>
          <button type="button" onClick={this.changeColor}>Change State Color</button>
        </>
      );
  }
}

export default Comp;
