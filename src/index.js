import React from 'react';
import ReactDom from 'react-dom';

class ShopItem extends React.Component {
	clickDel(){
		this.props.delItem(this.props.index);
	}
	render() {
		return (
			<tr>
				<td>{this.props.value.id}</td>
				<td>{this.props.value.prod}</td>
				<td>{this.props.value.price}</td>
				<td><button onClick={this.clickDel.bind(this)}>刪除</button></td>
			</tr>
		)
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			sample: ''
		};
		this.testClick = this.testClick.bind(this);
	}

	componentDidMount(){
		fetch("/0503/list.php").then(res => res.json()).then(res =>{this.setState({items:res})})
	}
	
	testClick() {
		const data = this.state.items;
		data.push(this.state.sample);
		this.setState( {items:data , sample:''} );
	}
	
	delItem(index){
		const data = this.state.items;
		data.splice(index)
		this.setState( {items:data} );
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.sample}
					onChange={event=>this.setState({sample:event.target.value})}/>
				<button onClick={this.testClick}>按鈕</button>
				<table>
					<tbody>
						{this.state.items.map( (aa,idx) => (
							<ShopItem value={aa} index={idx} delItem={this.delItem.bind(this)} />
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

ReactDom.render( <App />, document.getElementById('root') );