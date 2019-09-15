import post from './postReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ post });

export default rootReducer;
