// Import the react and react-dom libaries
import React from 'react';
import ReactDOM from 'react-dom';

function getTime(){
    return (new Date()).toLocaleTimeString();
}

// Create a react component
const App = () => {
    const buttonText = { text: 'click me'};
    const labelText = 'Enter name:'
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor:'blue', color: 'white'}}>
          {buttonText.text}
      </button>
      <div>Current Time:</div>
        <h3>{getTime()}</h3>
    </div>
    
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
