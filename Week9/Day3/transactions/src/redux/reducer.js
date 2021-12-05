import { DELETE, INSERT, UPDATE, UPDATE_INDEX } from "./actions"

const getList = () => {
    if (!localStorage.getItem('list')) {
        localStorage.setItem('list', JSON.stringify([]))
    }

    try {
        const list = JSON.stringify(localStorage.getItem('list'))
        if (!list || !Array.isArray(list)) return []

        return list
    } catch (err) {
        console.log(err.message)
        return err
    }
}

const initState = {
    listArr: getList(),
    currentIndex: -1
}


export const reducer = (state = initState, action) => {
    switch (action.type) {
        case INSERT:
            const list = [...state.listArr, action.payload];
            localStorage.setItem('list', JSON.stringify(list))
            return { ...state, listArr: list };

        case DELETE:
            const currentIndex = state.listArr.findIndex(data => data.id === action.payload)
            state.listArr.splice(currentIndex, 1)
            localStorage.setItem('list', JSON.stringify(state.listArr))
            return { ...state, listArr: [...state.listArr] };

        case UPDATE:
            state.listArr[state.currentIndex] = action.payload
            localStorage.setItem('list', JSON.stringify(state.listArr))
            return { currentIndex: -1, listArr: [...state.listArr] };

        case UPDATE_INDEX:
            console.log(action.payload)
            return { ...state, currentIndex: action.payload }

        default:
            return { ...state }
    }
}