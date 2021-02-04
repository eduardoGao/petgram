import React from "react"
import Context from "../Context"
import { UserForm } from "../components/UserForm"
import { RegisterMutation } from "../container/RegisterMutation"

export const NotRegisterUser = () => {
return (
    <div>
        <Context.Consumer>
            {
                ({ activateAuth }) => {
                    return (
                        <RegisterMutation>
                            {
                                (register, { data, loading, error }) => {
                                    const onSubmit = ({ email, password }) => {
                                        const input = { email, password }
                                        const variables = { input }
                                        register({ variables })
                                            .then(activateAuth)
                                    }
                                    const errMsg = error && "Hubo algún problema o el usuario ya existe"

                                    return <UserForm onSubmit={onSubmit} error={errMsg} disabled={loading} title="Iniciar Sesión" />
                                }
                            }
                        </RegisterMutation>
                    )
                }
            }
            
        </Context.Consumer>
        
    </div>
)
}
