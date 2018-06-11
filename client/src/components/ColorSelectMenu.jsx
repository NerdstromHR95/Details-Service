import React from 'react';


class ColorSelectMenu extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		this.props.toggleMenu();
		this.props.changeColor(e.target.id)
	}

	render() {
	  return (
	    <div className='menu'>
	      <div className='sizeOption' onClick={this.props.toggleMenu}><strong className='smallIndent'>Please Choose A Color</strong></div>
	      {this.props.options.map(color => (
	      	<div className='colorOption' onClick={this.handleClick} key={color} id={color} >
	      	  <svg className='circle' height='30' width='30'>
	      	    <circle r='13' cx='15' cy='15' stroke='black' strokeWidth='2' fill={color}>
	      	    </circle>
	      	  </svg>
	      	  <span className='colorOptionText'>
	      	    {color}
	      	  </span>
	      	</div>
	      ))}
	    </div>
	  )
	}
}

export default ColorSelectMenu;