import {leagcy_createStore} from 'redux'
import { applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {reducer as movieReducer} from './movieReducer/reducer'

const rootReducer = combineReducers({

})

export const store = leagcy_createStore(applyMiddleware(thunk))