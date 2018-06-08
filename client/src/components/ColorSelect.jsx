import React from 'react';
import ColorSelectMenu from './ColorSelectMenu.jsx'

const ColorSwatches = (props) => {
	return (
		<div className='colorSwatches'>
			{props.colors.map(color => {
				return (
				  <svg key={color} className='circle' height='35' width='35'>
				    {color === props.selected && 
					    <circle 
					      className='backCircle' 
					      r='13' 
					      cx='15' 
					      cy='15' 
					      stroke='black' 
					      strokeWidth='5' 
					      fill='black'>
					    </circle>
					}
		      	    <circle 
		      	      id={color}
		      	      className='frontCircle' 
		      	      r='13' 
		      	      cx='15' 
		      	      cy='15' 
		      	      stroke='grey' 
		      	      strokeWidth='1' 
		      	      onClick={function(e){ props.handleSelect(e.target.id)}}
		      	      fill={color}>
		      	    </circle>
		      	  </svg>
		        )
			})}
		</div>
	)
}

class ColorSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ['Black', 'White', 'Blue', 'Red', 'Green'],
			selected: 'Color',
			menuOpen: false
		}
		this.dropMenu = this.dropMenu.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	dropMenu() {
		this.setState(prevState => ({
			menuOpen: !prevState.menuOpen
		}))
	}

	handleSelect(color) {
		this.setState({
			selected: color
		})
	}

	render() {
		const menuOpen = this.state.menuOpen
		if (menuOpen) {
			return <ColorSelectMenu dropMenu={this.dropMenu} handleSelect={this.handleSelect} options={this.state.options}/>
		} else {
			return (
			  <div>
				<div className='selectedColor' onClick={this.dropMenu}>
				  <span className='smallIndent'>{this.state.selected}</span>
				  <i className="fas fa-angle-down arrow"></i>
				</div>
				<ColorSwatches handleSelect={this.handleSelect} colors={this.state.options} selected={this.state.selected} />
			  </div>
			)
		}
	}
}

export default ColorSelect;