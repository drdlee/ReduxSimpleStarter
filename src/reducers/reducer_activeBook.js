export default function(currentState = null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return currentState
}
