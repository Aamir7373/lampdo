import React, { Component } from 'react';

class LmdCounter extends Component {
  state = { 
    count:0,
   }

   lmdHandleIncreament = () => {
    this.setState( {count: this.state.count +1} );
   }
  render() {

    return (
      <React.Fragment>
        <span className={this.lmdBadgesClasses()}>{this.lmdFormat()}</span>
        <button onClick={this.lmdHandleIncreament} className='btn btn-primary btn-sm'>Increament</button>
      </React.Fragment>
    );
  }

  lmdBadgesClasses() {
    let classes = 'badge m-2 ';
    classes += this.state.count === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  }

  lmdFormat(){
    const { count } = this.state;
    return count === 0 ? 'zero' : count;
  }
}
 
export default LmdCounter;