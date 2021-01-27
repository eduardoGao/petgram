import React from "react"
import Context from "../Context"

export const NotRegisterUser = () => {
    return (
        <div>
            <h2>No has iniciado sesión</h2>
            <Context.Consumer>
                {
                    ({ activateAuth }) => {
                        return (
                            <form onSubmit={activateAuth}>
                                <button type="submit">Inicia sesión</button>
                            </form>
                        )
                    }
                }
                
            </Context.Consumer>
            
        </div>
    )
}
