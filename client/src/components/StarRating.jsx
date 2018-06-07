import React from 'react';

const StarRating = function(props) {
	let stars = [];
	const halfStar = (props.starRating % 20) !== 0
	const starCount = Math.floor(props.starRating / 20)
	for (let i = 0; i < starCount; i++) {
		stars.push(<i className="fas fa-star"></i>)
	}
	return (
		<div className='starRating'>
			{stars}
			{halfStar && <i className="fas fa-star-half"></i>}
		</div>
	)
}

export default StarRating;