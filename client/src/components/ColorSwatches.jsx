import React from 'react';

const ColorSwatches = (props) => {

	function _changeColor(e) {
		props.changeColor(e.target.id);
	}

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
		      	      onClick={_changeColor}
		      	      fill={color}>
		      	    </circle>
		      	  </svg>
		        )
			})}
		</div>
	)
}

export default ColorSwatches;