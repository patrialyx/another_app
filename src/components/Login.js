import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import Navbar from '../components/Navbar'
import {useAuth} from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} =useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
    
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/donor")
        } catch (f) {
            setError('Failed to log in')
            console.error(f)
        }
        setLoading(false)
    }
    
    return (
        <>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a
                className="navbar-brand col-sm-10 col-md-1 mr-0"
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                Trazible
            </a>
            </nav>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log in</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        
                        <Button disabled={loading} className="w-100" type="submit">Log in</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password"> Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="belowWords">
                Need an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    )
}
