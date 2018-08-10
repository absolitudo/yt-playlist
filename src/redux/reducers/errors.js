const defaultState = [];

const errors = (state = defaultState, action) => {
    switch (action.type) {
        case "CLEAR_ERRORS":
            return clearErrors();
        case "DISPLAY_ERROR":
            console.log(action.type);
            return displayError(state, action);
        default:
            return state;
    }
};

const clearErrors = () => [];

const displayError = (state, action) => [...state, action.payload];

export default errors;
