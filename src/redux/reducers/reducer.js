import { combineReducers } from 'redux';

// import anotherReducer from './another/reducer';
import userReducer from './user/userReducer.jsx';
import authReducer from './user/authReducer.jsx';

const reducer = combineReducers ({
    user: userReducer,
    auth: authReducer,
});

export default reducer;