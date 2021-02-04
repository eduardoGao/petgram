import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
    
    const email = useInputValue("")
    const password = useInputValue("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }

    return (
        
        <Form onSubmit={handleSubmit} disabled={disabled}>
            <Title>{title}</Title>
            <input
                placeholder="email"
                disabled={disabled}
                value={email.value}
                onChange={email.onChange}
            />
            <input
                placeholder="password"
                type='password'
                disabled={disabled}
                {...password}
            />
            
            <Button type="submit" disabled={disabled}>{title}</Button>
            {error && <Error>{error}</Error>}
        </Form>
         
    )
}
