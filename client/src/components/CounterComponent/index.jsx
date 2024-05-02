import React from 'react';
import {connect} from 'react-redux'
import { tuple } from 'yup';


const CounterComponent = (props) => {
  const {count, dispatch} = props;

  const handleIncrement = () => {
    
    const incrementAction = {
      type: 'increment'
    }
    
    dispatch(incrementAction)
  };

  const handleDecrement = () => {
    
    const decrementAction = {
      type: 'decrement'
    }
    
    dispatch(decrementAction)
  };


  return (
    <div>
      <p>Current count is {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

function mapStateToProps(state) {
  return{
    count: state.count
  }
}

const withProps = connect(mapStateToProps);

const  CounterWithReduxState = withProps(CounterComponent);

export default CounterWithReduxState;
