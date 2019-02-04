import listReducer from './listReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    listOfMembers: listReducer
})

export default rootReducer
