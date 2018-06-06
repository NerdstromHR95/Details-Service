import React from 'react';


class SelectMenu extends React.Component {
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
	    <div>
	      {this.props.options.map(size => (<div className='sizeOption' onClick={this.handleClick} key={size} >{size}</div>))}
	    </div>
	  )
	}
}

export default SelectMenu;