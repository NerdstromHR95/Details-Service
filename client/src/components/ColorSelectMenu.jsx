import React from 'react';


class ColorSelectMenu extends React.Component {
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
	      <div className='sizeOption'><strong className='smallIndent'>Please Choose A Color</strong></div>
	      {this.props.options.map(color => (<div className='colorOption' onClick={this.handleClick} key={color} id={color}>{color}</div>))}
	    </div>
	  )
	}
}

export default ColorSelectMenu;