// import {
//   createStore,
//   compose,
//   applyMiddleware,
//   bindActionCreators,
//   combineReducers,
// } from "redux";
// console.log("-------------------03_Enhancer.js-----------------------");

// const reducer = (state = { count: 1 }) => state;

// // reducer, initial state,enhancer
// // enhancer is function is pass createstore to function and we have to return instance of createstore
// // mostly is used to view state and its done my redux dev tools
// // this is like we have added middleware

// const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
//   const monitorReducer = (state, action) => {
//     const start = performance.now();
//     const newState = reducer(state, action);
//     const end = performance.now();
//     const diff = end - start;
//     console.log(diff);
//     return newState;
//   };
//   return createStore(monitorReducer, initialState, enhancer);
// };

// const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
//   const loggedReducer = (state, action) => {
//     console.log("Old-State", state, action);
//     const newState = reducer(state, state);
//     console.log("New State", newState, action);
//     return newState;
//   };
//   return createStore(loggedReducer, initialState, enhancer);
// };

// const store = createStore(reducer, compose(monitorEnhancer, logEnhancer));
// store.dispatch({ type: "Hello" });
