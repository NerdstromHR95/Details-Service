import React from 'react';

const Popup = (props) => {
	if (props.open) {
		return (
			<div className='popup'>
			  <div className='popTop' onClick={props.closePopup} >
			    X
			  </div>
			  <div className='popBody'>
			    <div className='popTitle'>
			      You've got great taste!
			    </div>
			    <div className='popSubtitle'>
			      Added to your bag
			    </div>
			    <div>
			      <img src='PiquePolo.jpg' className='popPicture' />
			    </div>
			    <div className='popSize'>
			      Size: {props.size}
			    </div>
			    <div className='popColor'>
			      Color: {props.color}
			    </div>
			    <div className='popCheckout'>
			      Checkout
			    </div>
			    <div className='popViewBag'>
			      View Shopping Bag(1)
			    </div>
			  </div>
			</div>
		)
	} else {
		return null;
	}
}

export default Popup;