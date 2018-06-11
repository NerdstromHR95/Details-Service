import React from 'react';
import ColorSelectMenu from './ColorSelectMenu.jsx'


class ColorSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: this.props.colors,
			selected: this.props.selected,
			menuOpen: this.props.menuDown
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.selected !== this.props.selected) {
			this.setState({
				selected: this.props.selected
			})
		}
		if (this.state.menuOpen !== this.props.menuDown) {
			this.setState({
				menuOpen: this.props.menuDown
			})
		}
	}

	render() {
		const menuOpen = this.state.menuOpen
		if (menuOpen) {
			return <ColorSelectMenu toggleMenu={this.props.toggleMenu} changeColor={this.props.changeColor} options={this.state.options}/>
		} else {
			return (
			  <div>
				<div className='selectedColor' onClick={this.props.toggleMenu}>
				  {this.state.selected === 'Color' ? <span className='smallIndent menuDefault'>{this.state.selected}</span> : <span className='smallIndent'>{this.state.selected}</span>}
				  <i className="fas fa-angle-down arrow"></i>
				</div>
			  </div>
			)
		}
	}
}

export default ColorSelect;