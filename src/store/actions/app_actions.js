/* eslint-disable prettier/prettier */
const SET_LOGGED_IN_USER = '@binbox/currentuser';
const SYNC_CONTACT_IN_APP = '@syncContact';

function setLoggedInUser(user) {

  return {
    type: SET_LOGGED_IN_USER,
    payload: user,

  };
}

function syncContacts(contact) {
 // console.log('this from action', contact);
  return {
    type: SYNC_CONTACT_IN_APP,
    payload: contact,
  };
}

export default {
  SET_LOGGED_IN_USER,
  SYNC_CONTACT_IN_APP,

  setLoggedInUser,
  syncContacts,
};