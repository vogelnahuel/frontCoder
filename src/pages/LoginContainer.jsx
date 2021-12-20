import React, { useState } from 'react'
import Login from './Login'
import * as yup from "yup";
import { VALIDATION_REGEX } from "../utils/constants";
import { useHistory } from 'react-router';
const LoginContainer = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [isFetching, setisFetching] = useState(false)
  const History = useHistory();

    const postLogin=(values)=>{
      History.push('/dashboard');
    }

    const validationSchema = yup.object({
        email: yup
          .string()
          .required("Este campo es requerido")
          .matches(VALIDATION_REGEX.regEmail, "El correo ingresado es inválido"),
        password: yup.string().required("Este campo es requerido"),
      });
    
      return <Login {...props} validationSchema={validationSchema} isFetching={isFetching} postLogin={postLogin}/>;    
}

export default LoginContainer;
