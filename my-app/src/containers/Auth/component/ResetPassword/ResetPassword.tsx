import React from "react";
import {useDispatch} from "react-redux"
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import {AuthActions} from "@containers/"
import styles from "./styles.module.scss";
const ResetPassword = () => {
    const dispatch = useDispatch()

    const initionalStateResetPassword = {
        password: "",
        confirmPass: ""
    }
  const validationResetPasword= Yup.object().shape({
        password: Yup.string().min(4).required("Field is requiered !"),
        confirmPass: Yup.string()
          .min(4)
          .when("password", (password, schema) => {
            return schema.test({
              test: (confirmPass: string) => confirmPass === password,
              message: "Password don`t match",
            });
          })
          .required("Field is requiered !"),
      })

      const onSubmit = (e: any, {resetForm}: any) => {
          console.log("value", e)
          dispatch(AuthActions.RESET_PASSWORD.REQUEST(e))
          resetForm()
      }
return(
    <div className={styles.wrapper}>
    <Formik initialValues={initionalStateResetPassword} validationSchema={validationResetPasword} onSubmit={onSubmit}>
      {(props) => {
        console.log("props", props);
        return (
          <Form {...props}>
              <h1>Reset Password</h1>
           

            <div className={styles.inputLogin}>
            <label >Write Password</label>
              <Field className={styles.imput} type="password" placeholder="Enter your password" name="password" />
              <ErrorMessage name="password" />
            </div>

            <div className={styles.inputLogin}>
            <label >Confirm Password</label>
              <Field type="password"  placeholder="Enter your password" name="confirmPass" />
              <ErrorMessage name="confirmPass" />
            </div>
            <button className={styles.button} type="submit"> Click me</button>
            
          </Form>
        );
      }}
    </Formik>
    {/* <Link to="/registration">Go to Login ?</Link> */}
    {/* <Link to={ROUTER_PATH.REGISTRATION}>Nothing Here</Link> */}
    

  </div>
)

}
export default ResetPassword;
