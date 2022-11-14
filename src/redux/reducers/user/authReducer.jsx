// Constant type strings

const SET_AUTH = 'SET_AUTH';
const RM_AUTH = 'REMOVE_AUTH';

// Functions for updating the redux store

export const setAuth = (update) => {
  return {
    type: SET_AUTH,
    access_token: update.access_token ?? undefined,
    expires_in: update.expires_in ?? undefined,
    refresh_token: update.refresh_token ?? undefined,
    scope: update.scope ?? undefined,
    token_type: update.token_type ?? undefined,
    error: update.error ?? undefined,
    error_description: update.error_description ?? undefined,
  };
};

export const removeAuth = () => {
  return {
    type: RM_AUTH,
  };
};

// The authentication reducer

const INITIAL_STATE = {
  access_token: undefined,
  expires_in: undefined,
  refresh_token: undefined,
  scope: undefined,
  token_type: undefined,
  error: undefined,
  error_description: undefined,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        access_token: action.access_token,
        expires_in: action.expires_in,
        refresh_token: action.refresh_token,
        scope: action.scope,
        token_type: action.token_type,
        error: action.error,
        error_description: action.error_description,
      };
    case RM_AUTH:
      return {
        ...state,
        access_token: undefined,
        expires_in: undefined,
        refresh_token: undefined,
        scope: undefined,
        token_type: undefined,
        error: undefined,
        error_description: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
