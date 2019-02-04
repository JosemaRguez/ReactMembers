const defaultState = {
    listOfMembers: [],
    page: 1
}

const listReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_LIST':
            if (!action.itIsFirstPage) {
                state.listOfMembers = [...state.listOfMembers, action.listOfMembers]
            }
            else {
                state.listOfMembers = [action.listOfMembers]
            }
            state.page = action.page
            return state
        case 'REFRESH_PAGE':
            state.page = action.page
            return state
        default:
            return state
    }
}




export default listReducer