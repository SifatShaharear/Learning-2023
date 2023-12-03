const {createStore} = require ("redux");

const ADD_USER = "ADD_USER";

//create state

const initialState = {
    user: ['Sifat'],
    count: 1,
}

// create action 

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}

// Create reducer

const userReducer = (state = initialState,action) => {
switch (action.type) {
    case ADD_USER:
        return {
            user: [...state.user, action.payload],
            count: state.count+ 1,
        }
        break;

    default:
        state;
}
}

//create store 

const store = createStore(userReducer);

store.subscribe(()=> {
    console.log(store.getState());
}
);

store.dispatch(addUser("shaharear"));
store.dispatch(addUser("Afran"));