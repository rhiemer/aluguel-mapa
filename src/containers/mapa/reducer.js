import {fromJS} from 'immutable';

const initialState = fromJS({});

function mapaReducer(state = initialState, action) {  
  switch (action.type) {
    default:
      return state;
  }
}

export default mapaReducer;
