import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h1>All Clicks counter: {this.props.count} </h1>
      </div>
    )
  }
}
