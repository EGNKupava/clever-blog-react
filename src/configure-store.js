import { createStore, applyMiddleware, compose } from "redux";
// import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import createSagaMiddlewere from "redux-saga";

import { createRootReducer } from "./store";
import rootSaga from "./store/root-saga";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddlewere();

export default function configureStore() {
  const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
