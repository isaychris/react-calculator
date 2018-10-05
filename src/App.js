import React, { Component } from 'react';
import Key from './key'
import Display from './display'
const math = require('mathjs')

class App extends Component {
	constructor(props) {
		super(props);
				
		this.state = {
				input: ""
		}
}
	updateDisplay = (new_input) => {
		if(this.state.input === "error") {
			this.setState({input: new_input})

		} else {
			this.setState({input: this.state.input + new_input})
		}
	}

	clearDisplay = () => {
		this.setState({input:""})
}

calculate = () => {
	if(this.state.input !== ""){
	try {
		let result = math.eval(this.state.input)
		this.setState({input: result})
		console.log(result)

	} catch(e) {
			this.setState({input: "error"})
		}
}
}
	render() {
		return (
			<div className="App container">
				<Display action={this.state.input}/>

				<div className="row">
					<Key value="Clear" handleClick={this.clearDisplay}/>
					<Key value="(" handleClick={this.updateDisplay}/>
					<Key value=")" handleClick={this.updateDisplay}/>
				</div>

				<div className="row">
					<Key value="7" handleClick={this.updateDisplay}/>
					<Key value="8" handleClick={this.updateDisplay}/>
					<Key value="9" handleClick={this.updateDisplay}/>
					<Key value="+" handleClick={this.updateDisplay}/>
				</div>

				<div className="row">
					<Key value="4" handleClick={this.updateDisplay}/>
					<Key value="5" handleClick={this.updateDisplay}/>
					<Key value="6" handleClick={this.updateDisplay}/>
					<Key value="-" handleClick={this.updateDisplay}/>
				</div>

				<div className="row">
					<Key value="1" handleClick={this.updateDisplay}/>
					<Key value="2" handleClick={this.updateDisplay}/>
					<Key value="3" handleClick={this.updateDisplay}/>
					<Key value="*" handleClick={this.updateDisplay}/>
				</div>

				<div className="row">
					<Key value="0" handleClick={this.updateDisplay}/>
					<Key value="." handleClick={this.updateDisplay}/>
					<Key value="=" handleClick={this.calculate}/>
					<Key value="/" handleClick={this.updateDisplay}/>
				</div>
			</div>
		);
	}
}

export default App;
