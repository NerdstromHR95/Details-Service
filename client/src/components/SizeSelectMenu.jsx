import React from 'react';


class SizeSelectMenu extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		console.log('event target value:', e.target.innerHTML)
		this.props.dropMenu();
		this.props.handleSelect(e.target.innerHTML)
	}

	render() {
	  return (
	    <div className='menu'>
	      <div className='sizeOption'><strong className='smallIndent'>Please Choose A Size</strong></div>
	      {this.props.options.map(size => (<div className='sizeOption' onClick={this.handleClick} key={size}>{size}</div>))}
	    </div>
	  )
	}
}

export default SizeSelectMenu;