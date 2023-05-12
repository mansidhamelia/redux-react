import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';



const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => { };


  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>

        <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
export default Counter;


// when you use class based component

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()

//   }
//   toggleCounterHandler() { }

//   render() {
//     return (
//       < main className={classes.counter} >
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className={classes}>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>

//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main >
//     )
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


