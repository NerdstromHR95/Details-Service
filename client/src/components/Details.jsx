import React from 'react';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      working: true,
    };
  }
  render() {
    return (
      <h1>React is {this.state.working}!</h1>
    );
  }
}

export default Details;

