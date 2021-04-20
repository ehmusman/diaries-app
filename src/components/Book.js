import React from 'react'
import axios from "axios"
const Book = ({ id, book, author, genre, deleted }) => {
    const handleOnClick = async () => {
        try {
            await axios.delete(`/api/delete/book/${id}`)
                .then(res => {
                    deleted(res.data)
                })
                .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }
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
