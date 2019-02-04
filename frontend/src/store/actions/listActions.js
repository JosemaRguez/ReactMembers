export const getListMembers = (page, list) => {
    console.log(page)
    return (dispatch) => {
        if (!list[page - 1] || list[page - 1].length === 0) {
            fetch(`/getMembers?page=${page}`)
                .then(res => res.json())
                .then(members => {
                    dispatch({ type: 'GET_LIST', page, list: [...list, members] })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        else{
            dispatch({ type: 'GET_LIST', page, list })
        }

    }
}