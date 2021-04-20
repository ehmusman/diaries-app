import React, { useEffect, useState } from 'react'
import axios from "axios"
import Book from './Book'

const Books = ({ add, clear, deleted }) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/books")
            setBooks(data)
            clear()
        }
        fetchData()
        // eslint-disable-next-line
    }, [add, deleted])


    if (!books.length) return <p>Loading.....</p>

    return (
        <div className="container my-5">
            <div className="card-columns">
                {books.map(book => (
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
