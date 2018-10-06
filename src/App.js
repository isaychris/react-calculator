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

    // callback for display component; handles and filters the changing input from keyboard.
    handleChange = (e) => {
        let char = e.target.value[e.target.value.length - 1]
        if(["*", "/", ".", "+", "-", "^", 
            "(", ")", "0", "1", "2", "3", 
            "4", "5", "6", "7", "8", "9", undefined].includes(char)) {
        this.setState({input: e.target.value})
    }
}

    // callback for history component; updates the display when user clicks on history list.
    updateDisplayHistory = (history_exp) => {
        this.setState({
            input: history_exp
        })
    }

    // callback for display component; updates the display with new input
    updateDisplay = (new_input) => {
        let prev = this.state.input;

        // if a result was computed
        if(this.state.done) {
            // check if new input is operator,
            if(["*", "/", ".", "+", "-", "^"].includes(new_input)) {
                // if previous input was an operator, dont do anything
                if(prev[prev.length -1] === new_input) {
                    return;
                }
                // if previous was a number, append input with operator
                this.setState({
                    input: this.state.input + new_input,
                    done: false
                })
            // if new input is number, replace input with number.
            } else {
                this.setState({
                    input: new_input,
                    done: false
                })
            }
        // else if result wasnt computed yet, append new input with input.
        } else {
            this.setState({
                input: this.state.input + new_input,
            })
        }
    }

    //  adds expression and result to history state
    addToHistory = (new_exp, result) => {
        this.setState({
            history: [...this.state.history, {exp: new_exp, result: result}],
        })
    }

    // clears the display by setting it to empty
    clearDisplay = () => {
        this.setState({
            input: ""
        })
    }

    // calculates the expression and sends it to history
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
