import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

export default class MyCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            evenCount : 0,
        };

    }

    allClicksCounter = () => {
        this.setState((prevState) => {
          const newCount = prevState.count + 1;
          return {
            count: newCount,
            evenCount: newCount % 2 === 0 ? newCount : prevState.evenCount
          };
        });
      };
    
    
   

    render() {
        return (
          <div className='section'>
            <button onClick={this.allClicksCounter}>Click me</button>
            <CounterDisplayer count={this.state.count} />
            <EvenCounterDisplayer evenCount={this.state.evenCount} />
          </div>
        );
      }
    }
