import React from 'react';
import axios from 'axios';
import SizeSelect from './SizeSelect.jsx';
import ColorSelect from './ColorSelect.jsx';
import StarRating from './StarRating.jsx';


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      colors: ['Black', 'White', 'Blue', 'Red', 'Green'],
      selectedColor: 'Color',
      selectedSize: 'Size',
    };
    this.getitem = this.getItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeSize = this.changeSize.bind(this);
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

  componentDidMount() {
    this.getItem();
  }

  changeColor(color) {
    this.setState({
      selectedColor: color
    })
  }

  changeSize(size) {
    this.setState({
      selectedSize: size
    })
  }

  handleClick() {
    if (this.state.selectedColor === 'Color') {
      alert('You must choose a color');
    } else if (this.state.selectedSize === 'Size') {
      alert('You must choose a size');
    } else {
      this.setState({
        selectedSize: 'Size',
        selectedColor: 'ColorSelect'
      })
    }
  }

  render() {
    return (
      <div className='main'> 
        <div className='starRating'>
          <StarRating starRating={this.state.product.star}/>
        </div> 
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
          <SizeSelect selected={this.state.selectedSize} handleClick={this.changeSize} category={this.state.product.category}/>
        </div>
        <div className='menuBuffer'></div>
        <div className='colors'>
          <ColorSelect selected={this.state.selectedColor} handleClick={this.changeColor} />
        </div>
        <div className='formField'>
          <form>
            <input type='text' className='inputField' value='1' />
            <div className='addButton' onClick={this.handleClick} >
              Add to Bag
            </div>
            <div className='wishButton' onClick={this.handleClick} >
              Add to Wishlist
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Details;

