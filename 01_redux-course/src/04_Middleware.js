// import {
//   createStore,
//   compose,
//   applyMiddleware,
//   bindActionCreators,
//   combineReducers,
// } from "redux";
// console.log("-------------------04_Middleware.js-----------------------");
// // middleware and enhancer both are same but middleware are used in general

// const reducer = (state = { count: 1 }) => state;

// // next is nothing but dispatch
// const logMiddleware = (store) => (next) => (action) => {
//   console.log("Old State", store.getState(), action);
//   next(action);
//   console.log("New State", store.getState(), action);
// };

// const monitorMiddleware = (store) => (next) => (action) => {
//   const start = performance.now();
//   next(action);
//   const end = performance.now();
//   const diff = end - start;
//   console.log(diff);
// };
// const store = createStore(
//   reducer,
//   applyMiddleware(logMiddleware, monitorMiddleware)
// );
// store.dispatch({ type: "Hello" });
