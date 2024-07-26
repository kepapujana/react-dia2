import { useState } from 'react'

const Counter = (props, step) => {
  const [counter, setCounter] = useState(props.counter)
  const increment = () => {
    setCounter(counter + props.step)
  }

  const decrement = () => {
    setCounter(counter - props.step);
  }

 return (
  <div>
    <button onClick={increment}>+</button>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
  </div>
 )
}

export default Counter




// import React, { Component } from 'react'

// export default class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: this.props.counter,
//     }
//   } 

//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   } 
 
//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.counter}</h1>
//         <button onClick={this.increment}>+</button>
//       </div>
//     )
//   }
// }
