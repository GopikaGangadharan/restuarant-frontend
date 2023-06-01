import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { allrestuarantReducer } from "./reducers/allrestuaranReducer";


const reducers = combineReducers({
    allrestuarantReducer
})

const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))

export default store