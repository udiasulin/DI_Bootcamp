export const SEARCH = 'SEARCH';
export const USERS = 'USERS';

export const handleChange = (value) => {
    return {
        type: SEARCH,
        payload: value
    }
}

export const getUsers = (arr) => {
    return {
        type: USERS,
        payload: arr
    }
}
