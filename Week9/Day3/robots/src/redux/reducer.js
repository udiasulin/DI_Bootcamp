import { SEARCH, USERS } from './actions'

const initalState = {
    arr: [],
    text: ''
}

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case SEARCH:
            return { ...state, text: action.payload }
        case USERS:
            return { ...state, arr: action.payload }
        default:
            return { ...state }
    }
}