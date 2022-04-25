import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth";
import thunk from "redux-thunk";
import { courseReducer } from "./course";
import { pageReducer } from "./page";

const reducers = combineReducers({
  auth: authReducer,
  course: courseReducer,
  page: pageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
