import React, { useEffect } from 'react'
import Book from './Book'
import { useDispatch, useSelector } from "react-redux"
import { gettingBooks, resetBooks } from "../store/books"

const Books = ({ deleted }) => {
    const dispatch = useDispatch()
    const { list, success, gBLoading } = useSelector(state => state.books)

    useEffect(() => {
        dispatch(gettingBooks())

        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (success) {
            dispatch(resetBooks())
        }

    }, [success, dispatch])


    if (!list.length || gBLoading) return <p>Loading.....</p>

    return (
        <div className="container my-5">
            <div className="card-columns">
                {list.map(book => (
                    <Book
                        key={book.id}
                        id={book.id}
                        book={book.book}
                        author={book.author}
                        genre={book.genre}
                        deleted={deleted}
                    />
                ))}
            </div>
        </div>
    )
}

export default Books
