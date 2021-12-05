export const INSERT = 'INSERT';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
export const UPDATE_INDEX = 'UPDATE-INDEX';

export const addTransaction = (data) => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const updateTransaction = (data) => {
    return {

        type: 'UPDATE',
        payload: data
    }
}

export const deleteTransaction = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export const updateByIndex = (index) => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }
}



