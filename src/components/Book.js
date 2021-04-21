import React from 'react'
import { useDispatch } from 'react-redux'
import { removingBook } from "../store/books"

const Book = ({ id, book, author, genre }) => {
    const dispatch = useDispatch()
    const handleOnClick = async () => {
        dispatch(removingBook(id))
    }
    return (
        <div className="card">
            <div className="card-title">
                <i onClick={handleOnClick} style={{ cursor: "pointer" }} className="fas fa-trash-alt text-danger float-right m-3"></i>
                <div className="card-body">
                    <p>Book : {book}</p>
                    <p>Author: {author}</p>
                    <p>Genre: {genre}</p>
                </div>
            </div>
        </div>
    )
}

export default Book
