import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // store data in an array
  switch(action.type) {
    case FETCH_WEATHER:
    // never change state directly.  This returns an entirely new array.
      return state.concat([ action.payload.data ]);
  }
  // redux-promise (the middleware) looks at the promise from the payload property.
  // if the payload is a promise, redux-promise stops the action
  // UNTIL request is resolved, and THEN redux-promise dispatches a new action of the same type,
  // but with a payload of an unwrapped promise with data, sent to the reducer
  console.log('action:', action);


  return state;
}
