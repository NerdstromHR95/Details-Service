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
				    {color === props.selected ? 
					    <circle 
					      className='backCircle' 
					      r='15' 
					      cx='20' 
					      cy='20' 
					      stroke='#3a3a3a' 
					      strokeWidth='7' 
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