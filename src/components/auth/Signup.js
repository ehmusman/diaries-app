import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { signUp, resetUsers } from "../../store/user"
const Signup = ({ handle }) => {
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.auth)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handlesubmit = () => {
        if (name === "" || email === "" || password === "") {
            alert("Please fill all the fields")
            return
        }
        const data = JSON.stringify({
            id: Math.random() * 9876543234567,
            name, email, password
        })
        dispatch(signUp(data))
    }
    const [msg, setMsg] = useState("")
    useEffect(() => {
        if (error) {
            setMsg(error)
            setTimeout(() => {
                setMsg("")
                dispatch(resetUsers())
            }, 2000)

        }
    }, [error, dispatch])
    return (
        <div className="container">
            {msg && <div className="alert alert-danger">{msg}</div>}
            <div className="row">
                <div className="col-12 col-md-6 mx-auto w-100">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className="form-control" placeholder="Password" />
                            </div>
                            <p className="float-right my-1">Have an account ? <span style={{ cursor: "pointer" }} onClick={() => handle()}>Signup</span> </p>
                            <input onClick={handlesubmit} type="submit" value="Login" className="btn btn-outline-dark btn-block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
