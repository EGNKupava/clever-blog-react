import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./purchases/reducer";
import { rootSaga } from "./root-saga";

import { tableReducer } from "./table";
import { messagesReducer } from "./messages";
import { userReducer } from "./user";
import { usersReducer } from "./users";

const rootReducer = combineReducers({
  table: tableReducer,
  user: userReducer,
  main: reducer,
  messages: messagesReducer,
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);
