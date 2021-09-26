import {tasksConstants} from "../actions/constants";



const initialState ={
    tasks:[]
};

export default (state = initialState, action)=>{
   
    switch(action.type){
        case tasksConstants.GET_ALL_TASKS_SUCCESS:
            state ={
                ...state,
                tasks:action.payload.tasks
            }
            break;
    }

    return state;
}