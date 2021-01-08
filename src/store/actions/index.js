export function setQuote(data) {
    return {
        type: "SET_QUOTE",
        payload: data
    }
}

export function setFavorite(data) {
    return {
        type: "SET_FAVORITES",
        payload: data
    }
}

export function setMyQuote(data) {
    return {
        type: "SET_MYQUOTE",
        payload: data
    }
}

export function fetchQuote() {
    return (dispatch) => {
        fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => {
            console.log(data.quote, "<<<<<<<<<<<<<<<")
            dispatch(setQuote(data.quote))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function addQuoteToFavorite(quote) {
    return (dispatch) => {
        dispatch(setFavorite(quote))
    }
}

export function addMyQuote(quote) {
    return (dispatch) => {
        dispatch(setMyQuote(quote))
    }
}
