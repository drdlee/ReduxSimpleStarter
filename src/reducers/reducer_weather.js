import {FETCH_WEATHER} from '../actions/index';

export default function(currentState = [], action){
  console.log('Action received in Reducers:', action); // here the promise from the Action already converted to data by the middleware redux-promise
  // switch (action.type){
  // case FETCH_WEATHER:
  //   return [action.payload.data, ...currentState]; // cara ES6, ini masukin data baru kedalam isi data lama
  // }
  if (action.type === FETCH_WEATHER){
    if(action.error){
      return currentState;
    }else{
      return [action.payload.data, ...currentState];
    }
  }
  return currentState;
}
