import React, { useContext } from "react"
import { UserForm } from "../components/UserForm"
import { RegisterMutation } from "../container/RegisterMutation"
import { LoginMutation } from "../container/LoginMutation"
import { Context } from "../Context"

export const NotRegisterUser = () => {
    const { activateAuth } = useContext(Context)
    
    return (
        <>
            <RegisterMutation>
                {
                    (register, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password }
                            const variables = { input }
                            register({ variables }).then(({data}) => {
                                const {signup} = data
                                activateAuth(signup)
                            })
                        }
                        const errMsg = error && "Hubo algún problema o el usuario ya existe"

                        return <UserForm onSubmit={onSubmit} error={errMsg} disabled={loading} title="Regístrate" />
                    }
                }
            </RegisterMutation>

            <LoginMutation>
                {
                    (login, { data, loading, error }) => {
                        const onSubmit = ({ email, password }) => {
                            const input = { email, password }
                            const variables = { input }
                            login({ variables }).then(({data}) => {
                                //console.log(data)
                                const {login} = data
                                activateAuth(login)
                            })
                        }

                        const errMsg = error && "Correo o contraseña incorrecta"

                        return <UserForm onSubmit={onSubmit} error={errMsg} disabled={loading} title="Iniciar Sesión" />
                    }
                }
            </LoginMutation>
        </>
    )
}
