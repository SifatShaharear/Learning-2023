const {createStore} = require ("redux");

const increment = "Increment";
const decrement = "Decrement";

// create state

const initialCounter = {
    count: 0,
}

// create action

const inCount = () => {
    return {
        type: increment,
    }
}

const deCount = () => {
    return {
        type: decrement,
    }
}

// crete reducer

const counterReducer = (state=initialCounter,action) => {
switch (action.type) {
    case increment:
        return {
            ...state,
            count: state.count+1
        }
        break;
    case decrement:
        return {
            ...state,
            count: state.count-1
        }
        break;
    default:
        return state;
}
}
// create store

const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(inCount());
