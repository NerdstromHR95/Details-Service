import React from 'react';


class SizeSelectMenu extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		this.props.dropMenu();
		this.props.handleSelect(e.target.id)
	}

	render() {
	  return (
	    <div className='menu'>
	      <div className='sizeOption'><strong className='smallIndent'>Please Choose A Size</strong></div>
	      {this.props.options.map(size => (<div className='sizeOption' onClick={this.handleClick} key={size} id={size}>{size}</div>))}
	    </div>
	  )
	}
}

export default SizeSelectMenu;