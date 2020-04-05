import { createStore } from "redux";
import todoReducer from "./reducers";

export let store = createStore(todoReducer);
