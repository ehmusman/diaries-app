import { createServer, Response } from "miragejs"
import books from './json/books.json'
import users from "./json/users.json"
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
            this.post("/signup", async (schema, request) => {
                const user = JSON.parse(request.requestBody)
                const findUser = await users.find(u => u.email === user.email)
                if (findUser) {
                    const error = new Response(400, { some: "header" }, "This User is Already Present")
                    return error
                }
                if (!findUser) {
                    users.push(user)
                    return new Response(200, {}, user)
                }
            })
            this.post("/login", async (schema, request) => {
                const user = JSON.parse(request.requestBody)
                const findUser = await users.find(u => u.email === user.email)
                if (!findUser) {
                    const error = new Response(400, { some: "header" }, "Invalid Email or Password")
                    return error
                }
                if (findUser) {
                    if (findUser.password === user.password) {
                        const res = new Response(200, {}, findUser)
                        return res
                    }
                    return new Response(400, {}, "Invalid Email or Password")
                }
            })
        }
    })
    return server
}