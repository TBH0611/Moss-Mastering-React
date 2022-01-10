import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends React.Component {
  
      state = {
        counters: [
            {id : 1, value : 0},
            {id: 2, value: 0 },
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
      };

      handleReset = () => {
          const newCounters = this.state.counters.map((c) => {
              c.value = 0;
              return c
          });
          this.setState({counters: newCounters});
      };

      handleDelete = (counter) => {
        // console.log('handleDelete() called from counters.jsx (Counters)', counter);
        const  newcounters = this.state.counters.filter(x => x.id !== counter.id);
        this.setState({counters: newcounters});
      };

      handleIncrement = (counter) => {
          //we need to create a new array
          //first we need to clone the current array
          var newCounters = [...this.state.counters];
          //secondly need to find the position nth of the passed counter
          var index = this.state.counters.indexOf(counter);
          //the updating the counter at the position nth of the newarray
          newCounters[index].value++;
          //finally calling the setState method()
          this.setState({
              counters: newCounters
          });
      };

      handleDecrement = (counter) => {
        //we need to create a new array
        //first we need to clone the current array
        var newCounters = [...this.state.counters];
        //secondly need to find the position nth of the passed counter
        var index = this.state.counters.indexOf(counter);
        //the updating the counter at the position nth of the newarray
        newCounters[index].value--;
        //finally calling the setState method()
        this.setState({
            counters: newCounters
        });
    };
  
  render () {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(x => x.value > 0).length}/>
      <main className="container">
        <Counters
            counters={this.state.counters}
            OnReset = {this.handleReset}
            OnIncrement = {this.handleIncrement}
            OnDecrement = {this.handleDecrement}
            OnDelete = {this.handleDelete}

        />
      </main>
  </React.Fragment>
    );
  };

}

export default App;
