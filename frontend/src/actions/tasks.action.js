import axios from "../helpers/axios";
import { tasksConstants } from "./constants";


// action to get all the tasks
 const getTasks = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: tasksConstants.GET_ALL_TASKS_REQUEST });
            const res = await axios.post(`tasks/all`);
            if (res.status === 200) {
                const { tasks } = res.data;
                dispatch({
                    type: tasksConstants.GET_ALL_TASKS_SUCCESS,
                    payload: { tasks },
                });
            } else {
                dispatch({ type: tasksConstants.GET_ALL_TASKS_FAILURE });
            }
        } catch (error) {
            console.log(error);
        }
    };
};



// action to add a new task
export const addTask = (payload) => {

    return async (dispatch) => {
        try {
            dispatch({ type: tasksConstants.ADD_TASK_REQUEST });
            const res = await axios.post(`tasks/create`, payload);
            if (res.status === 201) {
                dispatch({ type: tasksConstants.ADD_TASK_SUCCESS });
                dispatch(getTasks());
            } else {
                dispatch({ type: tasksConstants.ADD_TASK_FAILURE });
            }

        } catch (error) {
            console.log(error);
        }
    };

};


//action to delete task

export const deleteTaskById = (payload) => {
    console.log(payload);
    return async (dispatch) => {
        try{
            const res = await axios.delete(`tasks/remove`,{
                data:{payload},
            });
            dispatch({type: tasksConstants.DELETE_TASK_BY_ID_REQUEST});
           
            if(res.status === 202){
                dispatch({type:tasksConstants.DELETE_TASK_BY_ID_SUCCESS});
                dispatch(getTasks());
            } else{
                const{error} = res.data;
                dispatch({
                    type: tasksConstants.DELETE_TASK_BY_ID_FAILURE,
                    payload:{
                        error,
                    },
                });
            }
        } catch(error){
            console.log(error);
        }
    };
};

// action to add a new task
export const changeStatusById = (payload) => {

    return async (dispatch) => {
        try {
            dispatch({ type: tasksConstants.CHANGE_TASK_STATUS_REQUEST });
            const res = await axios.post(`tasks/update`, payload);
            if (res.status === 201) {
                dispatch({ type: tasksConstants.CHANGE_TASK_STATUS_SUCCESS });
                dispatch(getTasks());
            } else {
                dispatch({ type: tasksConstants.CHANGE_TASK_STATUS_FAILURE });
            }

        } catch (error) {
            console.log(error);
        }
    };

};



export {
    getTasks
}