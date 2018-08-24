import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Radium, { StyleRoot } from 'radium'
// import person css to js
import Person from './Person/Person';
// import person component , note: name must be uppercase, eg: Person, in JSX lower case elements are reserved for html
// react identifies uppercase as cutom component

// App is inherited from components which is inported from react
class App extends Component {

  // state is available only in class which is extended from component class
  state = {
    persons: [
      { id: 'asf', name: "Nands", age: 28},
      { id: 'ghi', name: "Alex", age: 25},
      { id: 'kil', name: "Steph", age:25}
    ],
    showPersons: false // if false don't show the person, (render dynamically)
  }

// switchNameHandler = (newName) => {
//   // console.log('was clicked');
//   // DON'T DO THIS:this.state.persons[0].name = "Nandini Nayak"
//   this.setState ({
//     persons: [
//       {name: newName, age: 28},
//       { name: "Alex", age: 25},
//       { name: "Steph", age: 28}
//     ]
//   })
// }
// input element from person js, value eneterd into the input field must be used as new name, event object will hold the info entered in input field
// add a unique id as key while manipulating array
nameChangeHandler = (event, id) => {
  // find index return index of the first e;ement that passes the test
  const personIndex = this.state.persons.findIndex(p => {
    // check if the id of the person passed matches any in the array, if so return true
    return p.id === id;
  });

  // objects are pass by ref hence use spread operator for a immutable property to pass the person object whose id was passed
  const person = {
    ...this.state.persons[personIndex]
  };

  // or ES5 way without spread operator
  // const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;

  const persons = [...this.state.persons];
  // updated person array
  persons[personIndex] = person;

  this.setState ( { persons: persons} )

}
// upon clickinge ach person deletePersonHandler is called to delete that particular person
deletePersonHandler = (personIndex) => {
  // fetch all persons
  // const persons = this.state.persons.slice();
  // allternate to this is spread operator : creates a new copy instead of accessing original array via reference;
  //Always update state in react in immutable fashion
  const persons = [...this.state.persons];
  // splice one element from array based on the index
  persons.splice(personIndex, 1);
  // update the new array in to the persons state
  this.setState({persons: persons})
}
// call this method on event triggered in the DOM, to toggle state of showPersons
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}
  render() {
    // JSx - syntax
    // <button onClick={this.switchNameHandler.bind(this, 'Nandini Nayak')}>Switch Name</button>
     // VVVI : click and changed refers to the switchName handler (name switched) and name change handler(name changed based on value entered in input field), these methods(clicka nd changed are accessed from person.js)

    // inline styling:
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {/*function passed to map method is applied on every element in the array*/}
          {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      {/* dynamic styling
        radium for hover*/}
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };

    let classes = [];
    // less than 2 people, push red class into the array
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1 ) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    // Lesson1.2 - to conditinally render a section of html, wrap the lists in the div
    // wrap in style root to apply radium with media queries
    return (
        <div className="App">
          <h1>Hi, I am a react App</h1>
          <p className={classes.join(' ')}> This is really  working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name </button>
            {  /* this is comment:render content conditionally with {}
            note: block statements, such as if{} cannot be used inbetween dynamic syntax of { html } in js
            check if the show persons is true or false
            note: if else case here is written in js format
            condition ? htmlcontent : else case (null)
            */}
          {persons}
        </div>

      //<h1> Another heading </h1> // not allowed, must go into div
    );
    // or - above Jsx syntax, gets compiled to
    return React.createElement('div', {className: 'App'}, 'Hi, I am a react App!!!' );
  }
}

// by default while importing irrespective of the name used, since App is default, its always refered to this one
export default App;
