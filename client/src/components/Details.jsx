import React from 'react';
import axios from 'axios'


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/item')
      .then(res => {
        this.setState({
          product: res.data[0]
        });
      })
      .catch(function(err) {
        console.log('An error occurred: ', err)
      })
  }

  render() {
    return (
      <div>  
        <h1>React is great!</h1>
        {this.state.product.title}
      </div>
    );
  }
}

export default Details;

