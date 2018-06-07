import React from 'react';
import SizeSelectMenu from './SizeSelectMenu.jsx'


class SizeSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ['small', 'medium', 'large'],
			selected: 'Size',
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

	handleSelect(size) {
		this.setState({
			selected: size
		})
	}

	render() {
		//console.log(this.state.options)
		const menuOpen = this.state.menuOpen
		if (menuOpen) {
			return <SizeSelectMenu dropMenu={this.dropMenu} handleSelect={this.handleSelect} options={this.state.options}/>
		} else {
			return (
				<div className='selectedSize' onClick={this.dropMenu}><span className='smallIndent'>{this.state.selected}</span></div>
			)
		}
	}
}

export default SizeSelect;
