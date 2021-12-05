export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = (data) => {
    return {
        type: 'INCREMENT',
        payload: data
    }
}

export const decrement = (data) => {
    return {

        type: 'DECREMENT',
        payload: data
    }
}