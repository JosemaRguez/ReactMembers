const defaultState = {
    listMembers:  [],
    page: 1
}

const listReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case 'GET_LIST': 
            state.listMembers = action.list
            state.page = action.page
            return state
        default:
            return state
    }
}




export default listReducer