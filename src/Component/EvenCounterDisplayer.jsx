import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h1>Even Clicks Counter : {this.props.evenCount} </h1>
      </div>
    )
  }
}
