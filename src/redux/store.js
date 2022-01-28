import rootreducers from "./reducers";
import { createStore } from 'redux';
const store = createStore(rootreducers);
export default store;