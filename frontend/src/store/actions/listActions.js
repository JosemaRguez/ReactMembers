export const getListMembers = (page, itIsFirstPage) => {
    const pageSize = 12
    
    return (dispatch) => {
            return fetch(`/getMembers?page=${page}&page_size=${pageSize}`)
            .then(res => res.json())
            .then(members => {
                dispatch({ type: 'GET_LIST', page, listOfMembers: members, itIsFirstPage })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const refreshPage = (page) => {
    return (dispatch) => {
            dispatch({ type: 'REFRESH_PAGE', page })
    }
}