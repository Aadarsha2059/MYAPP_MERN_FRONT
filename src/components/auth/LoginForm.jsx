import React from 'react'

import { useFormik } from 'formik'
import * as Yup from "yup"
import { useLoginUser } from '../../hooks/useLoginUser'

export default function LoginForm() {
    const {mutate, data,error, isPending}=useLoginUser()
    const validationSchema =Yup.object(
        {
            email:Yup.string().email("Invalid email").required("Please fill email"),
            password: Yup.string().min(8,"Password needs 8 character")
            .required("Please fill the password")
        }
    )

    const formik =useFormik(
        {
            initialValues:{
                //states
                email:"",
                password:""
            },
            validationSchema,
             onSubmit: (values) => {
            //values automatically create the object of value states
            mutate(values)


        }
        }
       

    )
    
  return (
    <div>LoginForm
        <form onSubmit={formik.handleSubmit}>
            <lable>Email</lable>
            <input
            type='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            ></input>
            {formik.touched.email && formik.errors.email &&
                <p>{formik.errors.email}</p>
            
            }
            <input
            type='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            ></input>

            {
                formik.touched.password && formik.errors.password &&
                <p>{formik.errors.password}</p>
            }
            <button type='submit'>Login</button>
 
        </form>
    </div>
  )
}
