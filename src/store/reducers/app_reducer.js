/* eslint-disable prettier/prettier */
import actions from '../actions';
const INITIAL_STATE = {
  contacts: []
};

export default function appReducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;

  switch (type) {
    case actions.appActions.SET_LOGGED_IN_USER:
      return { ...state, user: payload };
    case actions.appActions.SYNC_CONTACT_IN_APP:
      return { ...state, contacts: payload };
    default:
      return state;
  }
}