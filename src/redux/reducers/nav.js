const defaultState = {
    showAccountInfo: false
};

const nav = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGOUT":
            return { ...state, showAccountInfo: false };
        case "SET_SHOW_ACCOUNT_INFO":
            return { ...state, showAccountInfo: action.payload };
        default:
            return state;
    }
};

export default nav;
