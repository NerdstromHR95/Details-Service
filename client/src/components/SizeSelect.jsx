import React from 'react';
import SizeSelectMenu from './SizeSelectMenu.jsx';
import axios from 'axios';


class SizeSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ['small', 'medium', 'large'],
			selected: this.props.selected,
			menuOpen: false
		}
		this.dropMenu = this.dropMenu.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.setSizes = this.setSizes.bind(this);
	}

	dropMenu() {
		this.setState(prevState => ({
			menuOpen: !prevState.menuOpen
		}))
	}

	handleSelect(size) {
		this.props.handleClick(size);
	}

	setSizes() {
		console.log('state should change now', this.props.category);
		if (this.props.category === 'mensShirt' || this.props.category === 'mensSweater') {
			axios.get('http://localhost:3000/mensShirtSize')
			  .then(res => {
			  	this.setState({
			  		options: res.data[0].size
			  	});
			  })
			  .catch(err => {
			  	console.log('ERROR: ', err);
			  });
		} else if (this.props.category === 'mensPants' || this.props.category === 'mensJeans') {
			axios.get('http://localhost:3000/mensPantsSize')
			  .then(res => {
			  	this.setState({
			  		options: res.data[0].size
			  	});
			  })
			  .catch(err => {
			  	console.log('ERROR: ', err);
			  });
		} else if (this.props.category === 'mensShorts') {
			axios.get('http://localhost:3000/mensShortsSize')
			  .then(res => {
			  	this.setState({
			  		options: res.data[0].size
			  	});
			  })
			  .catch(err => {
			  	console.log('ERROR: ', err);
			  });
		} else if (this.props.category === 'womensDress') {
			axios.get('http://localhost:3000/womensDressSize')
			  .then(res => {
			  	this.setState({
			  		options: res.data[0].size
			  	});
			  })
			  .catch(err => {
			  	console.log('ERROR: ', err);
			  });
		} else if (this.props.category === 'womensSkirt' || this.props.category === 'womensShirt' || this.props.category === 'womensJacket' || this.props.category === 'womensSweater') {
			axios.get('http://localhost:3000/womensShirtSize')
			  .then(res => {
			  	this.setState({
			  		options: res.data[0].size
			  	});
			  })
			  .catch(err => {
			  	console.log('ERROR: ', err);
			  });
		} else {
			console.log('Set Sizes Did Not Work!')
		}
	}

	componentDidMount() {
		console.log('Mounted!')
		this.setSizes();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.category !== this.props.category) {
			this.setSizes();
		} else if (prevProps.selected !== this.props.selected) {
			this.setState({
				selected: this.props.selected
			})
		}
	}

	render() {
		console.log(this.state.options)
		const menuOpen = this.state.menuOpen
		if (menuOpen) {
			return <SizeSelectMenu dropMenu={this.dropMenu} handleSelect={this.handleSelect} options={this.state.options}/>
		} else {
			return (
				<div className='selectedSize' onClick={this.dropMenu}>
				  <span className='smallIndent'>{this.state.selected}</span>
				  <i className="fas fa-angle-down arrow"></i>
				</div>
			)
		}
	}
}

export default SizeSelect;
