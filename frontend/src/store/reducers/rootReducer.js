import listReducer from './listReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    listMembers: listReducer
})

export default rootReducer
