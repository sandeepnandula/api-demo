import React, { Component } from 'react';
import Welcome from './welcome';
import Bulbs from './Bulb';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yellowBulb: false,
      redBulb: false,
      greenBulb: false,
    };
    this.onClickyellowBulb = this.onClickyellowBulb.bind(this);
    this.onClickredBulb = this.onClickredBulb.bind(this);
    this.onClickgreenBulb = this.onClickgreenBulb.bind(this);
  }
  onClickyellowBulb() {
    if (this.state.yellowBulb === true) {
      this.setState({ yellowBulb: false});
    } else if(this.state.redBulb === true && this.state.greenBulb === true) {
      console.log('yellowBulb is turned on');
      this.setState({ yellowBulb: true});
    }
  }

  onClickredBulb() {
    if (this.state.redBulb === true) {
      this.setState({ redBulb: false});
    } else {
      console.log('redBulb is turned on');
      this.setState({ redBulb: true});
    }
  }

  onClickgreenBulb() {
    if (this.state.greenBulb === true) {
      this.setState({ greenBulb: false});
    } else if(!this.state.redBulb === true) {
      console.log('greenBulb clicked');
      this.setState({ greenBulb: true});
    }
  }
  render() {
    return (
      <div>
        <Welcome />
        <Bulbs
          onClickyellowBulb={this.onClickyellowBulb}
          onClickredBulb={this.onClickredBulb}
          onClickgreenBulb={this.onClickgreenBulb}
          yellowBulb={this.state.yellowBulb}
          redBulb={this.state.redBulb}
          greenBulb={this.state.greenBulb}
        />
      </div>
    );
  }
}

export default App;
