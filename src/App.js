import React, {Component} from 'react';
import './App.css';
import Display from './Display';
import ClearButton from './ClearButton';
import Operators from './Operators';
import Numbers from './Numbers';

class App extends Component {
  state = {
    currentResult: 0,
    previousResult: 0,
    action: null,
    clearScreen: false
  };

  onBtnClick = (value) => {
    const currentResult = this.state.currentResult;
    const previousResult = this.state.previousResult;
    const previousAction = this.state.action;
    switch (value) {
        case '=' :
            if (previousAction === '+') {
              this.setState({
                  currentResult: previousResult + currentResult,
                  previousResult: 0,
                  action: null,
                  clearScreen: true
              });
            } else if (previousAction === '-') {
                this.setState({
                    currentResult: previousResult - currentResult,
                    previousResult: 0,
                    action: null,
                    clearScreen: true
                });
            } else if (previousAction === '÷') {
                this.setState({
                    currentResult: previousResult / currentResult,
                    previousResult: 0,
                    action: null,
                    clearScreen: true
                });
            } else {
              this.setState({
                  clearScreen: true
              })
            }

            break;

        case '+' :
            this.setState({
               previousResult: currentResult,
               action: '+',
               clearScreen: true
            });

            break;

        case '-' :
            this.setState({
                previousResult: currentResult,
                action: '-',
                clearScreen: true
            });

            break;

        case '÷' :
            this.setState({
                previousResult: currentResult,
                action: '÷',
                clearScreen: true
            });

            break;

        case 'clear' :
            this.setState({
                currentResult: 0,
                previousResult: 0,
                action: null,
                clearScreen: true
            });

            break;

        default :
            if (this.state.clearScreen) {
              this.setState({
                  currentResult: value,
                  clearScreen: false
              });
            } else {
                this.setState({
                    currentResult: Number(currentResult + "" + value)
                });
            }

    }
  };

  render() {

    return (
      <div className="App">
        <Display value={this.state.currentResult}/>
        <ClearButton clicked={this.onBtnClick}/>
        <Operators clicked={this.onBtnClick}/>
        <Numbers clicked={this.onBtnClick}/>
      </div>
    );
  }
}

export default App;
