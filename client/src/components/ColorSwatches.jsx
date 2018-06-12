import React from 'react';

class ColorSwatches extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		hovered: false
    	}
    	this._changeColor = this._changeColor.bind(this);
    	this.handleMouseEnter = this.handleMouseEnter.bind(this);
    	this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

	_changeColor(e) {
		this.props.changeColor(e.target.id);
	}

	handleMouseEnter(e) {
		this.setState({
			hovered: e.target.id
		})
	}

	handleMouseLeave() {
		this.setState({
			hovered: false
		})
	}

	render() {
		return (
			<div className='colorSwatches'>
				{this.props.colors.map(color => {
					return (
					  <svg key={color} className='circle' height='35' width='35'>
					    {color === this.props.selected ? 
						    <circle 
						      className='backCircle' 
						      r='15' 
						      cx='20' 
						      cy='20' 
						      stroke='#3a3a3a' 
						      strokeWidth='7' 
						      fill='black'>
						    </circle> :
						    color === this.state.hovered ?
							    <circle 
							      className='backCircle' 
							      r='15' 
							      cx='20' 
							      cy='20' 
							      stroke='grey' 
							      strokeWidth='5' 
							      fill='black'>
							    </circle> :
								<circle 
							      className='backCircle' 
							      r='15' 
							      cx='20' 
							      cy='20' 
							      stroke='#e3e4e5' 
							      strokeWidth='5' 
							      fill='black'>
							    </circle>
						}
			      	    <circle 
			      	      id={color}
			      	      className='frontCircle' 
			      	      r='15' 
			      	      cx='20' 
			      	      cy='20' 
			      	      stroke='white' 
			      	      strokeWidth='4' 
			      	      onClick={this._changeColor}
			      	      fill={color}
			      	      onMouseEnter={this.handleMouseEnter}
			      	      onMouseLeave={this.handleMouseLeave}>
			      	    </circle>
			      	  </svg>
			        )
				})}
			</div>
	    )
	}

}

export default ColorSwatches;