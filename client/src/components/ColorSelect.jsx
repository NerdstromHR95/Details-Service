import React from 'react';
import ColorSelectMenu from './ColorSelectMenu.jsx'

class ColorSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ['black', 'white', 'blue', 'red', 'green'],
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
				<div className='selectedColor' onClick={this.dropMenu}><span className='smallIndent'>{this.state.selected}</span></div>
			)
		}
	}
}

export default ColorSelect;