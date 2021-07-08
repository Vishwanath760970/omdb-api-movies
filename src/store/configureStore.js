import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import moviesReducer from '../reducers/moviesReducer';
import movieInfoReducer from '../reducers/movieInfoReducer';

const configureStore=()=>{
    const store=createStore(combineReducers({
       moviesList:moviesReducer,
       movieInfo:movieInfoReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore