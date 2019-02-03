export const getListMembers = (page, list) => {
    return (dispatch) => {
            dispatch({type: 'GET_LIST', page, list})
    }
}