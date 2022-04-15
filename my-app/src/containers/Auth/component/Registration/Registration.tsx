import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {Formik, Form, Field, ErrorMessage} from "formik"
import {AuthActions} from "@containers/"
import * as Yup from "yup"
import styles from "./styles.module.scss";

const Registration = () =>{
    interface IRegitrationState{
        name: string;
        lastName: string;
        password: string;
    }

  
    const dispatch = useDispatch()
    const initialFormRegistration = {
        name: "",
        lastName: "",
        password: "",
    }
    const validationFormRegistration =Yup.object().shape({
        name: Yup.string().min(3).required("This field is required"),
        lastName: Yup.string().min(3).required("This field is required"),
        password: Yup.string().min(8).required("This field is required"),
      })

      const onSubmitRegistration = (e:any, {resetForm}: any) => {
          console.log("registr", e)
          dispatch(AuthActions.SIGN_UP.REQUEST(e))
          resetForm()
      }

      const onSubmitCancel= (e: any, {resetForm}: any) => {
          resetForm()
      }
    
    return(

<div className={styles.wrapper}>
    <Formik
     initialValues={initialFormRegistration} 
     validationSchema={validationFormRegistration} 
     onSubmit={onSubmitRegistration}>
         {(props)=>{
             return(
             <Form {...props}>
             <h1>Regisration</h1>
           <div className={styles.inputLogin}>
           <label >Write your name</label>
             <Field type="text" className={styles.imput} label="email" placeholder="Enter your name" name="name" />
             <ErrorMessage name="name" />
           </div>

           <div className={styles.inputLogin}>
           <label >Write your name</label>
             <Field type="text" className={styles.imput} label="email" placeholder="Enter your Last Name" name="lastName" />
             <ErrorMessage name="lastName" />
           </div>

           <div className={styles.inputLogin}>

           <label >Write Passwoed</label>
             <Field className={styles.imput} type="password" placeholder="Enter your password" name="password" />
             <ErrorMessage name="password" />
           </div>
         <button className={styles.button} type="submit"> Registration</button>
         </Form>)
            }
        
            }
    </Formik>
</div>

) }
export default Registration;
