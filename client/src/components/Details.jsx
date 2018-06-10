import React from 'react';
import axios from 'axios';
import SizeSelect from './SizeSelect.jsx';
import ColorSelect from './ColorSelect.jsx';
import StarRating from './StarRating.jsx';
import ColorSwatches from './ColorSwatches.jsx';


class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      colors: ['Black', 'White', 'Blue', 'Red', 'Green'],
      selectedColor: 'Color',
      selectedSize: 'Size',
      sizeMenuDown: false,
      colorMenuDown: false
    };
    this.getitem = this.getItem.bind(this);
    this.resetSelections = this.resetSelections.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.toggleSizeMenu = this.toggleSizeMenu.bind(this);
    this.toggleColorMenu = this.toggleColorMenu.bind(this);
    this.closeMenus = this.closeMenus.bind(this);
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
      selectedColor: color,
    })
  }

  changeSize(size) {
    this.setState({
      selectedSize: size
    })
  }

  resetSelections() {
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

  toggleSizeMenu() {
    if (this.state.colorMenuDown) {
      this.toggleColorMenu();
    }
    this.setState({
      sizeMenuDown: !this.state.sizeMenuDown
    })
  }

  toggleColorMenu() {
    this.setState({
      colorMenuDown: !this.state.colorMenuDown
    })
  }

  closeMenus() {
    this.setState({
      colorMenuDown: false,
      sizeMenuDown: false
    })
  }

  render() {
    return (
      <div className='main'> 
        <div className='starRating' onClick={this.closeMenus}>
          <StarRating starRating={this.state.product.star}/>
        </div> 
        <div className='title' onClick={this.closeMenus}>
          {this.state.product.title} 
        </div>
        <div className='brand' onClick={this.closeMenus}>
          {this.state.product.brand}
        </div>
        <div className='price' onClick={this.closeMenus}>
          <strong>{this.state.product.price}</strong><span className='tab'>Free Shipping</span>
        </div>
        <div className='description' onClick={this.closeMenus}>
          {this.state.product.description}
        </div>
        <div className='menuBuffer' onClick={this.closeMenus}></div>
        <div className='sizes'>
          <div>
            <strong>Fit</strong>  <span className='small'>True to size.</span>
          </div>
          <SizeSelect selected={this.state.selectedSize} menuDown={this.state.sizeMenuDown} toggleMenu={this.toggleSizeMenu} changeSize={this.changeSize} category={this.state.product.category} />
        </div>
        <div className='menuBuffer' onClick={this.closeMenus}></div>
        <div className='colors'>
          <ColorSelect selected={this.state.selectedColor} menuDown={this.state.colorMenuDown} toggleMenu={this.toggleColorMenu} changeColor={this.changeColor} colors={this.state.colors}/>
          <ColorSwatches changeColor={this.changeColor} selected={this.state.selectedColor} colors={this.state.colors} />
        </div>
        <div className='formField'>
          <form>
            <input type='text' className='inputField' value='1' />
            <div className='addButton' onClick={this.resetSelections} >
              Add to Bag
            </div>
            <div className='wishButton' onClick={this.resetSelections} >
              Add to Wishlist
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Details;

