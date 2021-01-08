import { createStore, applyMiddleware, combineReducers } from 'redux'
import quoteReducer from './reducers/quoteReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    quoteReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store