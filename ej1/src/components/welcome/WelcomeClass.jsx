import React, { Component } from 'react'

export default class WelcomeClass extends Component {
  render() {
    return (
      <div>
        <span>{this.props.name} </span>
        <span>{this.props.surname} </span>
        <span>, {this.props.age}</span>
      </div>
    )
  }
}
