import React from 'react';
// import Radium from 'radium';

// need the file extension (.css) can only omit for app.js
import classes from  './Person.css'
// create component: component is a fuction that returns ISX
const person = (props) => {
  // const style = {
  //     '@media (min-width: 500px)': {
  //       width: '450px'
  //     }
  // };
  // return <p> Im a Person and I am {Math.floor(Math.random() * 30)} years old</p>
  // for line 9: access non attribute values, children refers to any content between open and closing tag
  // access the switch handler function in another file via click property
  // access the nameHandler via changed method in the app.js file
  return (
    <div className={classes.Person}>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

// export function as default
export default person;
