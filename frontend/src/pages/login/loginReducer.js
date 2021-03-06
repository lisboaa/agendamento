const INITIAL_STATE = { login: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, login: action.login }
        default:
            return state;
    }
}