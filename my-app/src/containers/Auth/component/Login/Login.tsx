import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthActions, Registration } from "@containers/";
import { useDispatch } from "react-redux";
import {ROUTER_PATH } from "@router/"
import {Link, Routes, Route} from "react-router-dom"



const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("This field is Required"),
  });
  const onSubmit = (e: any, { resetForm }: any) => {
    console.log("form value", e);
    dispatch(AuthActions.SIGN_IN.REQUEST(e));
    resetForm();
  };
  
  return (
    <div className={styles.wrapper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props) => {
          console.log("props", props);
          return (
            <Form {...props}>
                <h1>Log IN</h1>
              <div className={styles.inputLogin}>
              <label >Write email</label>
                <Field type="email" label="email" placeholder="Enter your email address" name="email" />
                <ErrorMessage name="email" />
              </div>

              <div className={styles.inputLogin}>

              <label >Write Password</label>
                <Field className={styles.imput} type="password" placeholder="Enter your password" name="password" />
                <ErrorMessage name="password" />
              </div>
                <div>

                </div>
              <button className={styles.button} type="submit"> Click me</button>
              
            </Form>
          );
        }}
      </Formik>
      {/* <Link to="/registration">Go to Login ?</Link> */}
      {/* <Link to={ROUTER_PATH.REGISTRATION}>Nothing Here</Link> */}
      
 
    </div>
  );
};

export default Login;

