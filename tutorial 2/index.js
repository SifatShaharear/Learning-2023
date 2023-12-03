const {createStore, combineReducers} = require ("redux");

const ADD_USER = "ADD_USER";
const GET_DEPT = "GET_DEPT";
const ADD_DEPARTMENT = "ADD_DEPARTMENT";

//create state

const initialUserState = {
    user: ['Sifat'],
    count: 1,
}

const initialDeptState = {
    dept: ['ICT','Exam'],
    count: 2,
}

// create action 

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}

const getDept = () => {
    return {
        type:GET_DEPT,
    }
}

const addDept = (dept) => {
    return {
        type:ADD_DEPARTMENT,
        payload:dept,
    }
}


// Create reducer

const userReducer = (state = initialUserState,action) => {
switch (action.type) {
    case ADD_USER:
        return {
            user: [...state.user, action.payload],
            count: state.count+ 1,
        };

    default:
       return state;
}
}

const departmentReducer = (state = initialDeptState,action) => {
    switch (action.type) {
        case GET_DEPT:
            return {
                dept: [...state.dept],
                count: state.count,
            };

            case ADD_DEPARTMENT:
                return {
                    dept: [...state.dept,action.payload],
                    count: state.count+1,
                };
        
    
        default:
            return state;
    }
    }

    //combine reducer

const mainReducer = combineReducers({
    departmentR: departmentReducer,
    userR: userReducer,
});
//create store 

const store = createStore(mainReducer);

store.subscribe(()=> {
    console.log(store.getState());
}
);

store.dispatch(addUser("shaharear"));
store.dispatch(addUser("Afran"));
store.dispatch(getDept());
store.dispatch(addDept("SSS"));