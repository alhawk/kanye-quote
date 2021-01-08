import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchQuote, addQuoteToFavorite, addMyQuote } from '../store/actions/index'

function Home() {
    const quote = useSelector(state => state.quoteReducer.quote)
    const favorites = useSelector(state => state.quoteReducer.favorites)
    const myQuotes = useSelector(state => state.quoteReducer.myQuotes)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuote())
    }, [])

    const getQuote = (e) => {
        e.preventDefault()
        dispatch(fetchQuote())
    }

    const addToFavorite = (e, quote) => {
        e.preventDefault()
        const found = favorites.find(favorite => favorite === quote)
        if (!found) {
            dispatch(addQuoteToFavorite(quote))
        }
    }

    const [input, setInput] = useState('')

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const submitQuote = (e) => {
        e.preventDefault()
        dispatch(addMyQuote(input))

    }

    return (
        <div>
            <img src=""></img>
            <h1>Kanye-West Quotes</h1>
            <p>{quote}</p>
            <button onClick={(e) => getQuote(e)}>Get Quote</button>
            <button onClick={(e) => addToFavorite(e, quote)}>Add Favorite</button>
            <div>
                <h2>Favorites</h2>
                <ul>
                    {favorites.map(el => {
                        return <li>{el}</li>
                    })}
                </ul>
            </div>
            <div>
                <h2>Add Quote</h2>
                <input type="text" name="quoteInput" onChange={inputHandler} />
                <button onClick={(e) => submitQuote(e)}>Submit My Quote</button>
            </div>
            <div>
                <h2>My Quotes</h2>
                <ul>
                    {myQuotes.map(el => {
                        return <li>{el}</li>
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Home
