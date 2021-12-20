import { Input } from '../components/Input/Input';
import React from 'react'
import { Field, Form } from "react-final-form";
import useValidationSchema from '../hooks/useValidationSchema'
import './Login.scss'

const Login = ({ isFetching, validationSchema, postLogin }) => {
    return (
        <div>
            <Form
                onSubmit={(values) => { postLogin(values) }}
                validate={useValidationSchema(validationSchema)}
            >
                {({ handleSubmit }) => (

                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Sing in</h2>
                        <Field
                            type="text"
                            name="email"
                            id="usuario"
                            label="Usuario"
                            placeholder="Ingresa tu email"
                            className="Admin-Pickers-input"
                            component={Input}
                            maxLength={50}
                        />

                        <Field
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            label="Contraseña"
                            className="Admin-Pickers-input"
                            component={Input}
                            maxLength={20}
                        />


                        <button
                            className="login-button"
                            disabled={isFetching}
                            type="submit"
                            name="button"
                        >
                            <p className="login-init ">Iniciar sesión</p>
                        </button>

                    </form>
                )}
            </Form>
            {isFetching && <div className="modalLoading"></div>}
        </div>
    )
}

export default Login;