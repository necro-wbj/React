import React from 'react';
import ReactDom from 'react-dom';

class ShopItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.value}</td>
				<td>ooo22</td>
			</tr>
		)
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['thhh','issfd','aaaa','boXXXXok'],
			others: 1234456
		};
		this.testClick = this.testClick.bind(this);
	}
	
	testClick() {
		const data = this.state.items;
		data.push('ooxxxxx');
		this.setState( {items:data} );
	}
	
	render() {
		return (
			<div>
				<table>
					<tbody>
						{this.state.items.map( aa => (
							<ShopItem value={aa} />
						))}
					</tbody>
				</table>
				<button onClick={this.testClick}>按鈕</button>
			</div>
		)
	}
}

ReactDom.render( <App />, document.getElementById('root') );