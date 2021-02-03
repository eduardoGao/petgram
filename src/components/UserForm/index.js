import React, { useState } from 'react'

export const UserForm = ({ handleSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="email"
                
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                placeholder="password"
                type='password'
                
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            
            <button type="submit">Inicia sesión</button>
        </form>
    )
}
