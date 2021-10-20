import {SET_USER_MAIL, SET_USER_PASSWORD, SET_LOGIN} from '../actions';

const initialState = {
  mail: '',
  password: '',
  auth: 'Exit',
};

function loginReducer(
  state = initialState,
  action: {type: string; payload: string},
) {
  switch (action.type) {
    case SET_USER_MAIL:
      return {...state, mail: action.payload};
    case SET_USER_PASSWORD:
      return {...state, password: action.payload};
    case SET_LOGIN:
      return {...state, auth: action.payload};
    default:
      return state;
  }
}

export default loginReducer;
