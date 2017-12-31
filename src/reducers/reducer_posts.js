import {FETCH_POSTS, FETCH_SINGLE} from '../actions/index';
const INITIAL_STATE = { all:[], post: null };

export default function(currentState = INITIAL_STATE, action){
  switch(action.type){
  case FETCH_SINGLE:
    return { ...currentState, post: action.payload.data }
  case FETCH_POSTS:
    return { ...currentState, all: action.payload.data };
  default:
    return currentState;
  }
}
