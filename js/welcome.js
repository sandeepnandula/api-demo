import React, { PropTypes, Component } from 'react';

function Welcome (props) {
    return(
      <div className="App">
        <div className="App-header">
          <img src="./css/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to the Puzzle </h2>
        </div>

        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          There are three lights in a room. One yellow, one red, and one green.<br /><br />

          1. If a green light is on, then only yellow lights can be turned on or off.<br /><br />
          2. If a red light is on, then green lights cannot be turned on.<br /><br />
          3. Yellow lights can only be turned on if a red light is on.<br /><br />


          {/* One green light is on and one yellow light is on and one red light is on. */}

          all lights are OFF... How do we turn them on?
        </p>
      </div>
    );
  }

export default Welcome;
