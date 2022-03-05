// import {
//   createStore,
//   compose,
//   applyMiddleware,
//   bindActionCreators,
//   combineReducers,
// } from "redux";
// console.log("-------------------02_CombinedRedux.js-----------------------");

// // initial data is here
// const initialState = {
//   users: [
//     { id: 1, name: "Nayan" },
//     { id: 2, name: "Harsh" },
//   ],
//   tasks: [
//     { title: "File the TPS reports" },
//     { title: "Order more energy drinks" },
//   ],
// };

// // action type
// const ADD_USER = "ADD_USER";
// const ADD_TASK = "ADD_TASK";

// // action creator
// const addTask = (title) => ({ type: ADD_TASK, payload: { title } });
// const addUser = (user) => ({ type: ADD_USER, payload: user });

// // reducer for user
// const userReducer = (users = initialState.users, action) => {
//   switch (action.type) {
//     case ADD_USER:
//       return [...users, action.payload];

//     default:
//       return users;
//   }
// };

// // reducer for tasks
// const taskReducer = (tasks = initialState.tasks, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return [...tasks, action.payload];
//     default:
//       return tasks;
//   }
// };

// // to combine multiple reducer
// const reducer = combineReducers({ users: userReducer, tasks: taskReducer });
// const store = createStore(reducer, initialState);

// // action binder with dispatch
// const actions = bindActionCreators({ addTask, addUser }, store.dispatch);
// actions.addTask("HIHI");
// actions.addUser({ id: 3, name: "kanu" });
// console.log(store.getState());
