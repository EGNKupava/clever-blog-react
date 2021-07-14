import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./purchases/reducer";
import { rootSaga } from "./root-saga";

import { tableReducer } from "./table";
import { messagesReducer } from "./messages";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  table: tableReducer,
  user: userReducer,
  main: reducer,
  messages: messagesReducer,
});

const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);
