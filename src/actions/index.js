import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_SINGLE = 'FETCH_SINGLE';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=qwerty33';

export function fetchPost(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchSinglePost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_SINGLE,
    payload: request
  }
}
