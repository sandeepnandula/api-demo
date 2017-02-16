import React, { PropTypes, Component } from 'react';

class Bulbs extends(Component){
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    const style = { margin: '0 23%'};
    const yellowBulbStyle = { backgroundColor: this.props.yellowBulb? 'yellow' : ''};
    const redBulbStyle = { backgroundColor: this.props.redBulb? 'red' : ''};
    const greenBulbStyle = { backgroundColor: this.props.greenBulb? '#45e259' : ''};
    return(
      <div style={style}>
        <h2>
          <span style={{color:'yellow'}}>YellowBulb </span>
          <span style={{color:'#45e259'}}>GreenBulb </span>
          <span style={{color:'red'}}>RedBulb </span>
        </h2>
        <a>
          <img
            style={yellowBulbStyle}
            className='yellowBulb'
            src='http://www.yakoto.bg/images/bulb/bulb-turn-off.png'
            role='presentation'
            onClick={this.props.onClickyellowBulb}
          />
        </a>
        <a>
          <img
            style={greenBulbStyle}
            className='greenBulb'
            src='http://www.yakoto.bg/images/bulb/bulb-turn-off.png'
            role='presentation'
            onClick={this.props.onClickgreenBulb}
          />
        </a>
        <a>
          <img
            style={redBulbStyle}
            className='redBulb'
            src='http://www.yakoto.bg/images/bulb/bulb-turn-off.png'
            role='presentation'
            onClick={this.props.onClickredBulb}
          />
        </a>
      </div>
    );
  }
}

export default Bulbs;

Bulbs.propTypes= {
  onClickBulb1: PropTypes.bool,
  onClickBulb2: PropTypes.bool,
  onClickBulb3: PropTypes.bool
}
