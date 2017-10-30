import { createStore } from 'redux';
import postReducer from './reducers/post';

export default function configureStore() {
    const store = createStore(postReducer);
    return store;
}