import React from "react"
import Context from "../Context"
import { UserForm } from "../components/UserForm"

export const NotRegisterUser = () => {
    return (
        <div>
            <h2>No has iniciado sesión</h2>
            <Context.Consumer>
                {
                    ({ activateAuth }) => {
                        return (
                            <UserForm handleSubmit={activateAuth} />
                        )
                    }
                }
                
            </Context.Consumer>
            
        </div>
    )
}
