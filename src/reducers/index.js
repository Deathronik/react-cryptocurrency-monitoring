import cryptosReducer from "./cryptosReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cryptos: cryptosReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))