import React from 'react';
import axios from 'axios'


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      colors: [],
      sizes: [{}, {}, {}],
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
        console.log('An error occurred: ', err);
      });
    axios.get('http://localhost:3000/colors')
      .then(res => {
        this.setState({
          colors: res.data
        });
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });
    axios.get('http://localhost:3000/sizes')
      .then(res => {
        this.setState({
          sizes: res.data
        });
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });
  }

  render() {
    console.log(this.state.sizes[0].size);
    return (
      <div className='main'>  
        <div className='title'>
          {this.state.product.title} 
        </div>
        <div className='brand'>
          {this.state.product.brand}
        </div>
        <div className='price'>
          <strong>{this.state.product.price}</strong><span className='tab'>Free Shipping</span>
        </div>
        <div className='description'>
          {this.state.product.description}
        </div>
        <div className='sizes'>
          <div>
            <strong>Fit</strong>  <span className='small'>True to size.</span>
          </div>
          <select className='sizeDropdown'>
            {this.state.sizes.map(size => <option className='sizeOption'>{size.size}</option>)}
          </select>
        </div>
        <div className='colors'>
          <select className='sizeDropdown'>
            {this.state.colors.map(color => <option className='colorOption'>{color.color}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default Details;

