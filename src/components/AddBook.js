import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addingBook } from "../store/books"
const AddBook = ({ bookAdded }) => {
    const dispatch = useDispatch()
    const [book, setBook] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")

    const handleOnClick = async () => {
        if (book === "" || author === "" || genre === "") {
            alert("Fill All The Fields")
            return
        }
        const data = JSON.stringify({
            id: Math.random() * 12345678,
            book,
            author,
            genre
        })

        dispatch(addingBook(data))
        setBook("")
        setAuthor("")
        setGenre("")
    }
    return (
        <div className="container my-3">
            <div className="form-group">
                <label className="text-light" htmlFor="book">Book</label>
                <input type="text" id="book" value={book} onChange={e => setBook(e.target.value)} className="form-control" placeholder="Book Name" />
            </div>
            <div className="form-group">
                <label className="text-light" htmlFor="author">Author</label>
                <input value={author} onChange={e => setAuthor(e.target.value)} type="text" id="author" className="form-control" placeholder="Author Name" />
            </div>
            <div>
                <label className="text-light" htmlFor="genre">Book Genre</label>
                <input value={genre} onChange={e => setGenre(e.target.value)} type="text" id="genre" className="form-control" placeholder="Book Genre" />
            </div>
            <button onClick={handleOnClick} className="btn btn-outline-light btn-block mt-5">Add Book</button>
        </div >
    )
}

export default AddBook
