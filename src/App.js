import React, { Component } from 'react';
import Key from './components/key'
import Display from './components/display'
import History from './components/history'
import logo from './logo.svg';
import './App.css'

const math = require('mathjs')

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "Ready",
            done: true,
            history: [],
        }
    }

    handleChange = (e) => {
        let char = e.target.value[e.target.value.length - 1]
        if(["*", "/", ".", "+", "-", "^", 
            "(", ")", "0", "1", "2", "3", 
            "4", "5", "6", "7", "8", "9", undefined].includes(char)) {
        this.setState({input: e.target.value})
    }
}

    updateDisplayHistory = (new_exp,) => {
        this.setState({
            input: new_exp
        })
    }

    addToHistory = (new_exp, result) => {
        this.setState({
            history: [...this.state.history, {exp: new_exp, result: result}],
        })
    }

    updateDisplay = (new_input) => {
        let prev = this.state.input;

        if(["*", "/", ".", "+", "-", "^"].includes(new_input)) {
            if(prev[prev.length -1] === new_input) {
                return;
            }
        }

        if(this.state.done) {
            this.setState({
                input: new_input,
                done: false
            })

        } else {
            this.setState({
                input: this.state.input + new_input
            })
        }
    }

    clearDisplay = () => {
        this.setState({
            input: ""
        })
    }

    calculate = () => {
        if(this.state.input !== "") {
            try {
                let result = math.eval(this.state.input)

                this.addToHistory(this.state.input, result)
                this.setState({
                    input: result,
                    done: true
                })
            } catch (e) {
                this.setState({
                    input: "ERROR",
                    done: true
                })
            }
        }
    }
    render() {
        return (
            <div className="App container">
                <div className="header">
                    <img src={logo} className="App-logo" width="50" height="50" alt="logo" />
                    <span className="App-name">react-calculator</span>
                </div>
                
                <Display input={this.state.input} handleChange={this.handleChange}/><br/>

                <div className="row">
                    <Key value="Clear" handleClick={this.clearDisplay}/>
                    <Key value="(" handleClick={this.updateDisplay}/>
                    <Key value=")" handleClick={this.updateDisplay}/>
                    <Key value="^" handleClick={this.updateDisplay}/>
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
                </div><br/>

                <History history={this.state.history} updateDisplayHistory={this.updateDisplayHistory}/><br/>

                <div className="footer">
                    <a href="https://github.com/isaychris/react-calculator">View the project on GitHub</a>
                </div>
            </div>
        );
    }
}

export default App;