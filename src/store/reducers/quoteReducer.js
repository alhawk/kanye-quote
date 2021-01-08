const initalState = {
    quote: '',
    favorites: [],
    myQuotes: []
}

export default (state = initalState, action) => {
    switch (action.type) {
        case "SET_QUOTE":
            return { ...state, quote: action.payload }
        case "SET_FAVORITES":
            return { ...state, favorites: state.favorites.concat(action.payload) }
        case "SET_MYQUOTE":
            return { ...state, myQuotes: state.myQuotes.concat(action.payload) }
        default:
            return state
    }
}