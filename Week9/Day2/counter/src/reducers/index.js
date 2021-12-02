import * as actions from './actions'

const initalState = {
    counter: 0
}

export const reducer = (state = initalState, action = {}) => {
    switch (action.type) {
        case actions.INCREASE_COUNT:
            return { ...state, counter: state.counter + 1 }
        case actions.DECREASE_COUNT:
            return { ...state, counter: state.counter - 1 }
        default:
            return { ...state }
    }
}
