 
import tasksReducer from './tasks.reducer';
 
import {combineReducers} from 'redux';


const rootReducer = combineReducers({

    // stuff here can be seen by window.store.getstate()
    tasks :tasksReducer
   
});

export default rootReducer;