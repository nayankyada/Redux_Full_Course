// import {
//   createStore,
//   compose,
//   applyMiddleware,
//   bindActionCreators,
// } from "redux";
// console.log("-------------------01_Redux.js-----------------------")

// // compose combine all given function and return new function
// const makeLouder = (string) => string.toUpperCase();
// const reapeatThreeTimes = (string) => string.repeat(3);
// const embolden = (string) => string.bold();
// const makeLouderreapeatThreeTimesembolden = (string) =>
//   embolden(reapeatThreeTimes(makeLouder(string)));

// const usingCompose = compose(embolden, reapeatThreeTimes, makeLouder);

// console.log(
//   makeLouderreapeatThreeTimesembolden("hello"),
//   usingCompose("hello")
// );

// // initialstate
// const initialState = { value: 0 };

// // action
// const INCREMENT = "INCREMENT";
// const ADD = "ADD";

// // action creator
// const increment = () => ({ type: INCREMENT });
// const add = (amount) => ({ type: ADD, payload: amount });

// // reducerFunction
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { value: state.value + 1 };
//     case ADD:
//       return { value: state.value + action.payload };
//   }
// };



// // createStore
// const store = createStore(reducer);

// //Subscriber will be call after evry state change
// const subscriber = () => {
//   console.log("SUBSCRIBER", store.getState());
// };
// store.subscribe(subscriber);

// // simply dispatch action
// store.dispatch(increment());
// store.dispatch(add(25));
// console.log(store.getState());

// // bindActionCreator -> it binds action with dispatch so no need to write likr -> store.dispatch
// const actions = bindActionCreators({ increment, add },store.dispatch);
// console.log("bindActionCreator",actions)
// actions.add(25)
// actions.increment()
// console.log(store.getState())

