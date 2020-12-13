import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    const handleLogin = () => {
        setUser({
            id: 123,
            name: 'Ismael',
            email: 'ismael@gmail.com'
        })
    } 

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button className="btn btn-sm btn-primary" onClick={ handleLogin }>Login</button>
        </div>
    )
}
