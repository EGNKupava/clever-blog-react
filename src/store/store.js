import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./reducer";
import { mySaga } from "./table/saga";
import { tableReducer } from "./table";

const rootReducer = combineReducers({
  table: tableReducer,
  reducer,
});

const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);
