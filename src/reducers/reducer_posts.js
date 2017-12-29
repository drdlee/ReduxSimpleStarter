import {FETCH_POSTS} from '../actions/index';
const INITIAL_STATE = { all:[], post: null };

export default function(currentState = INITIAL_STATE, action){
  switch(action.type){
  case FETCH_POSTS:
    return { ...currentState, all: action.payload.data };
  default:
    return currentState;
  }
}
