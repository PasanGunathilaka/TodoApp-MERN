import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


//passing two arguments 1st is function 2nd is middleware
const store = createStore(rootReducer,composeWithDevTools(

    applyMiddleware(thunk)
));


export default store;