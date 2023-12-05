const {createStore,applyMiddleware} = require("redux");
const axios = require("axios");
const {thunk} = require("redux-thunk");

//constant create
const API_URL = "https://jsonplaceholder.typicode.com/todos";
const PLACE_REQUEST = "PLACE_REQUEST";
const GET_SUCCESS = "GET_SUCCESS";
const GET_ERROR = "GET_ERROR";

//crete state
const initialState = {
 todo:[],
 isLoading: false,
 error: null,
}

//create action 
const placeRequest = () => {
    return {
        type:PLACE_REQUEST,
    }
}

const getSuccess = (todos) => {
    return {
        type:GET_SUCCESS,
        payload:todos,
    }
}

const getError = (error) => {
    return {
        type:GET_ERROR,
        payload:error,
    }
}

//create reducer
const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLACE_REQUEST:
            return{
                ...state,
                isLoading:true,
            };
        case GET_SUCCESS:
            return{
                ...state,
                isLoading:false,
                todo:action.payload,
            };
        case GET_ERROR:
            return{
                ...state,
                isLoading:false,
                error:action.payload,
            };
    
        default:
            return state;
    }
}
const fetchData = () => {
    return (dispatch) => {
        dispatch(placeRequest());
        axios.get(API_URL)
        .then(response => {
            todos = response.data;
            title = todos.map(todo => todo.title);
            dispatch(getSuccess(title));
        }).catch(error => {
            const errorMessage = (error.message);
            dispatch(getError(errorMessage));
        });
    }
    
}
//create store
const callReducer = createStore(apiReducer,applyMiddleware(thunk));
callReducer.subscribe(() => {
    console.log(callReducer.getState());
});

callReducer.dispatch(fetchData());