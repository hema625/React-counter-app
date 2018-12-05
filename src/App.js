import React, { Component } from 'react';
import Counter from './components/counter';
import './App.css';

class App extends Component {
    state = {
      num : 0
    }

    increment = () => {
      const incre =  this.state.num;      
      this.setState({
           num : incre + 1
      })
    }
    reset = () => {     
      this.setState({
           num : 0
      })
    }
    decrement = () => {
      const incre =  this.state.num;      
      this.setState({
           num : incre - 1
      })
    }

  render() {
    return (
      <div className="App">
          <Counter val = {this.state.num}
             increment = {this.increment}
                 reset = {this.reset}
             decrement = {this.decrement}  />
      </div>
    );
  }
}

export default App;
