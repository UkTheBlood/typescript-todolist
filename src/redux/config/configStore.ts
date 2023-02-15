import { combineReducers, createStore } from "redux";
import todo from "./modules/todo";

const rootReducer = combineReducers({
    todo,
})

const store = createStore(rootReducer);

export default store;