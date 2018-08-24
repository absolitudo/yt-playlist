const defaultState = [];

const errors = (state = defaultState, action) => {
    switch (action.type) {
        case "CLEAR_ERRORS":
            return clearErrors();
        case "DISPLAY_ERROR":
            return displayError(state, action.payload);
        default:
            return state;
    }
};

const clearErrors = () => [];

const displayError = (state, error) => [...state, error];

export default errors;
