//Import React and ReactDOm libraries
import React from 'react';
import ReactDOM from 'react-dom';

const buttonText='Click me!!!'
//Create React component
const App = () => {
  return (
    <div>
    <label className="label" htmlFor="name">
    Enter Name:
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor:'blue', color: 'white'}}>
      {buttonText}
    </button>
   </div>
 );
};

//Take react component and show it on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
