import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John",
      age: 25,
      city: "New York",
    };
  }

  
  
  updateAge = () => {
    this.setState(
    );
    if(this.state.age === 28){
        console.log('HURRRRAY you have an award')
    }
  };

  render() {
    
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>Count : {}</p>
        <p>Age: {this.state.age}</p>
        <p>City: {this.state.city}</p>
        <button onClick={this.updateAge}>Increase Age</button>
      </div>
    );
  }
}

export default Test;
