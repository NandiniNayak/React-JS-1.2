import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import person css to js
import Person from './Person/Person';
// import person component , note: name must be uppercase, eg: Person, in JSX lower case elements are reserved for html
// react identifies uppercase as cutom component

// App is inherited from components which is inported from react
class App extends Component {

  // state is available only in class which is extended from component class
  state = {
    persons: [
      { name: "Nands", age: 28},
      { name: "Alex", age: 25},
      { name: "Steph", age:25}
    ]
  }

switchNameHandler = (newName) => {
  // console.log('was clicked');
  // DON'T DO THIS:this.state.persons[0].name = "Nandini Nayak"
  this.setState ({
    persons: [
      {name: newName, age: 28},
      { name: "Alex", age: 25},
      { name: "Steph", age: 28}
    ]
  })
}
// input element from person js, value eneterd into the input field must be used as new name, event object will hold the info entered in input field
nameChangeHandler = (event) => {
  this.setState ({
    persons: [
      {name: "Nands", age: 28},
      { name: event.target.value, age: 25},
      { name: "Steph", age: 26}
    ]
  })
}
  render() {
    // JSx - syntax
    // <button onClick={this.switchNameHandler.bind(this, 'Nandini Nayak')}>Switch Name</button>
     // VVVI : click and changed refers to the switchName handler (name switched) and name change handler(name changed based on value entered in input field), these methods(clicka nd changed are accessed from person.js)

    // inline styling:
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <h1> This is working!</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Nandini Nayak")}>Switch Name </button>
        <Person
          name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name} age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nands!!')}
          changed={this.nameChangeHandler} > My Hobbies: Gaming</Person>
        <Person
          name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      //<h1> Another heading </h1> // not allowed, must go into div
    );
    // or - above Jsx syntax, gets compiled to
    return React.createElement('div', {className: 'App'}, 'Hi, I am a react App!!!' );
  }
}

// by default while importing irrespective of the name used, since App is default, its always refered to this one
export default App;
