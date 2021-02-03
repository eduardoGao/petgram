import React from "react"
import Context from "../Context"
import { UserForm } from "../components/UserForm"

export const NotRegisterUser = () => {
    return (
        <div>
            <Context.Consumer>
                {
                    ({ activateAuth }) => {
                        return (
                            <UserForm handleSubmit={activateAuth} title="Iniciar Sesión" />
                        )
                    }
                }
                
            </Context.Consumer>
            
        </div>
    )
}
