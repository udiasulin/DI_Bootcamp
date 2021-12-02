import React from 'react';
import { connect } from 'react-redux';
import { addOne, minusOne } from '../reducers/actions';

class Counter extends React.Component {
    render() {
        const { counter, addOne, minusOne } = this.props
        return (
            <>
                <p>{counter}</p>
                <button onClick={addOne}>Plus</button>
                <button onClick={minusOne}>Minus</button>
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
        addOne: () => dispatch(addOne()),
        minusOne: () => dispatch(minusOne())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
