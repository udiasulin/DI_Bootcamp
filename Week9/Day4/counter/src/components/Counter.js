import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../reducer/actions';

class Counter extends React.Component {
    constructor() {
        super();
    }

    incrementIfOdd = () => {
        if (this.props.counter % 2 !== 0) {
            this.props.increment();
        }
    }

    incermentTimer = () => {
        setTimeout(this.props.increment, 1000);
    };


    render() {
        const { counter, increment, decrement } = this.props
        return (
            <>
                <p>{counter}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                <button onClick={this.incermentTimer}>increment Async</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);