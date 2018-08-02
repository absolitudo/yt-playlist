const setShowAccountInfo = payload => ({
    type: "SET_SHOW_ACCOUNT_INFO",
    payload
});

const logOut = () => ({
    type: "LOGOUT"
});

export { setShowAccountInfo, logOut };
