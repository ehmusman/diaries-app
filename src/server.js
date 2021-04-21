import { createServer } from "miragejs"
import books from './json/books.json'

export function makeServer() {
    let server = createServer({
        routes() {
            this.namespace = "api";
            this.get("/books", (schema, request) => {
                return books
            });
            this.post('/add/book', (schema, request) => {
                const book = JSON.parse(request.requestBody)
                books.push(book)
                return books
            })
            this.delete("/delete/book/:id", (scheme, request) => {
                const id = request.params.id
                const index = books.findIndex(i => i.id === id)
                books.splice(index, 1)
                return books
            })
        }
    })
    return server
}