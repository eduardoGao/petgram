import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
    
    const email = useInputValue("")
    const password = useInputValue("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Title>{title}</Title>
            <input
                placeholder="email"
                
                value={email.value}
                onChange={email.onChange}
            />
            <input
                placeholder="password"
                type='password'
                
                {...password}
            />
            
            <Button type="submit">{title}</Button>
        </Form>
    )
}
