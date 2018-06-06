import React from 'react';
import axios from 'axios';
import SizeSelect from './SizeSelect.jsx'
import ColorSelect from './ColorSelect.jsx'


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      colors: [],
      sizes: [{}, {}, {}],
    };
    this.getitem = this.getItem.bind(this);
    this.getSizes = this.getSizes.bind(this);
    this.getColors = this.getColors.bind(this);
  }

  getItem() {
    axios.get('http://localhost:3000/item')
      .then(res => {
        this.setState({
          product: res.data[0]
        });
      })
      .catch(function(err) {
        console.log('An error occurred: ', err);
      });
  }

  getSizes() {
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

  getColors() {
    axios.get('http://localhost:3000/colors')
      .then(res => {
        this.setState({
          colors: res.data
        });
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });
  }

  componentDidMount() {
    this.getItem();
  }

  // componentDidUpdate() {
  //   this.getItem();
  //   this.getColors();
  // }

  render() {
    console.log(this.state.sizes)
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
          <SizeSelect />
        </div>
        <div className='menuBuffer'></div>
        <div className='colors'>
          <ColorSelect />
        </div>
      </div>
    );
  }
}

export default Details;

