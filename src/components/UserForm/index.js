import React from 'react'

export const UserForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="email"  onChange={e => e.target.value} />
            <input placeholder="password" type="password" value="password" onChange={e => e.target.value} />
            <button type="submit">Inicia sesión</button>
        </form>
    )
}
