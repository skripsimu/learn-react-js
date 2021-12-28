const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    value: 1,
    age: 22,
}

///Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
    }
}
///Store
const store = createStore(reducer);

// Subscribtion
store.subscribe(() => {
    console.log('store change:', store.getState());
})

// Dispatch action
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 });
console.log(store.getState());
