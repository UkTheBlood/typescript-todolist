import { combineReducers, createStore } from "redux";
import todo from "./modules/todo";
import { todotype } from "../../shared/todos";

const rootReducer = combineReducers({
    todo,
})

const store = createStore(rootReducer);

export default store;