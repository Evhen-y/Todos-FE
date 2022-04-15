import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthActions } from "@containers/";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
    const dispatch = useDispatch()

    const initialValuesForgot = {
        email : ""
    }

    const validationForgot = Yup.object().shape({
        email: Yup.string().email("Invalid email format").required("Required")
    })

    const onSubmit = (e:any, {resetForm}:any)=>{
        dispatch(AuthActions.FORGOT_PASSWORD.REQUEST(e))
        resetForm()

    }
    return(
        <div className={styles.wrapper}>
            <Formik initialValues={initialValuesForgot} validationSchema={validationForgot} onSubmit={onSubmit}>
            {(props) => {
          console.log("props", props);
          return (
            <Form {...props}>
                <h1>Forgot Password</h1>
              <div className={styles.inputLogin}>
              <label >Write email</label>
                <Field type="email" label="email" placeholder="Enter your email address" name="email" />
                <ErrorMessage name="email" />
              </div>
            
              <button className={styles.button} type="submit"> Ok</button>
              
            </Form>
          );
        }}
            </Formik>
        </div>
    )

}



export default ForgotPassword;
