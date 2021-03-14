const SET_USER = "SET_USER";
const RM_USER = "REMOVE_USER";

export const setUser = (user) => {
    return {
        type: SET_USER,
        first_name: user.first_name ?? undefined,
        last_name: user.last_name ?? undefined,
        email: user.email ?? undefined,
        details: user.details ?? undefined,
    };
};

export const removeUser = () => {
    return {
        type: RM_USER,
    };
};

// The user reducer will handle all fields in the redux store related to the user (who would have guessed lol)

const INITIAL_STATE = {
    last_name: undefined,
    first_name: undefined,
    email: undefined,
    details: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                last_name: action.last_name,
                first_name: action.first_name,
                email: action.email,
                details: action.details,
            }
        case RM_USER:
            return {
                ...state,
                last_name: undefined,
                first_name: undefined,
                email: undefined,
                details: undefined,
            }
        default:
            return state;
    }
};

export default userReducer;