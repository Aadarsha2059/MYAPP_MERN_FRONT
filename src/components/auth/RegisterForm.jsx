import React from 'react'

import { useRegisterUser } from '../../hooks/useRegisterUser'

import { useRegisterUser as useRegisterUserTan } from '../../hooks/useRegisterUserTan'

export default function RegisterForm() {
    // const{register, isLoading,data,error} =useRegisterUser()

    const {mutate,data, error, isPending, isSuccess, isError} =useRegisterUserTan()
    //mutate is the funtion replaced for register ,rest are the states 

    const handleSubmit=async (e) =>{
        //static data
        const formData={
            email:"test1222@gmail.com",
            username:"tess11",
            firstName:"mero name",
            lastName:"last name",
            password:"password"
        }
        //use the hook function
        // let response = await register(formData)

        // if(response){
        //     //extra logic eg. navigations
        // }

        //mutate(not async function)
        mutate(formData, 
            {
                onSuccess:(response)=>{
                    //success logic (eg: navigations logics)
                },
                onError: (error) =>{
                    //error logics
                }
            }
        )

    }
  return (
    <div>RegisterForm
        <button onClick={handleSubmit}>Register</button>
        {/* // {conditional rendering} */}
    {error && <p>{error.message}</p>}
    {data && <p>{data.message}</p>}
    </div>
    
  )
}



// //classwork for dynamic datas
// import React, { useEffect, useState } from 'react';

// export default function RegisterForm() {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   // Initial message
//   useEffect(() => {
//     setMessage('Please provide informations');
//   }, []);

//   // Special case: welcome message for 'aadarsha'
//   useEffect(() => {
//     if (firstName.toLowerCase() === 'aadarsha') {
//       setMessage('Welcome aadarsha');
//     }
//   }, [firstName]);

//   // Submit handler
//   const handleSubmit = () => {
//     if (!email || !username || !firstName || !lastName || !password) {
//       setMessage('Provide all informations');
//     } else {
//       setMessage('Signed up successfully');
//     }
//   };

//   return (
//     <div>
//       <h2>Register Form</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={e => setFirstName(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={e => setLastName(e.target.value)}
//       /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       /><br />

//       <button onClick={handleSubmit}>Submit</button>

//       {/* Display message */}
//       {message && <p>{message}</p>}
//     </div>
//   );
// }


//claswork
// use toast to notify user for invalid input
// email should be in @email.com
// password and confirm password should be same
// if any input is empty notify that input is empty
// add another toast after mutate
// success: you can login now
// error:" please try again"



// classwork
// use toast to notify user for invalid input
// email should be in @email.com
// password and confirm password should be same
// if any input is empty notify that input is empty
// add another toast after mutate
// success: you can login now
// error: please try again

// import React, { useState } from 'react'
// import { useRegisterUser as useRegisterUserTan } from '../../hooks/useRegisterUserTan'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// export default function RegisterForm() {
//   const { mutate, data, error, isPending, isSuccess, isError } = useRegisterUserTan()

//   // form state
//   const [email, setEmail] = useState('')
//   const [username, setUsername] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')

//   const handleSubmit = () => {
//     // classwork: if any input is empty notify that input is empty
//     if (!email || !username || !firstName || !lastName || !password || !confirmPassword) {
//       toast.error('All fields are required')
//       return
//     }

//     // classwork: email should be in @email.com
//     if (!email.includes('@email.com')) {
//       toast.warning('Email must be in @email.com format')
//       return
//     }

//     // classwork: password and confirm password should be same
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match')
//       return
//     }

//     const formData = {
//       email,
//       username,
//       firstName,
//       lastName,
//       password,
//     }

//     // use toast to notify user for invalid input (already handled above)

//     // mutation with toast
//     mutate(formData, {
//       onSuccess: (response) => {
//         toast.success('Success: You can login now')
//       },
//       onError: (error) => {
//         toast.error('Error: Please try again')
//       },
//     })
//   }

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Register Form</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={e => setUsername(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={e => setFirstName(e.target.value)}
//       /><br />

//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={e => setLastName(e.target.value)}
//       /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       /><br />

//       <input
//         type="password"
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChange={e => setConfirmPassword(e.target.value)}
//       /><br />

//       <button onClick={handleSubmit}>Register</button>

//       {/* Toast notifications container */}
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   )
// }


//convert all the input to formik

// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useRegisterUser } from '../../hooks/useRegisterUser';

// export default function RegisterForm() {
//   const { mutate, data, error, isPending } = useRegisterUser();

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email').required('Please fill email'),
//     password: Yup.string().min(8, 'Password needs 8 characters').required('Please fill the password'),
//     username: Yup.string().required('Required username'),
//     firstName: Yup.string().required('Enter valid firstname'),
//     lastName: Yup.string().required('Enter valid lastname'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//       username: '',
//       firstName: '',
//       lastName: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       mutate(values);
//     },
//   });

//   return (
//     <div>
//       <h2>Register Form</h2>
//       <form onSubmit={formik.handleSubmit}>
//         {/* Email */}
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}

//         {/* Password */}
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//         {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}

//         {/* Username */}
//         <label>Username</label>
//         <input
//           type="text"
//           name="username"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.username}
//         />
//         {formik.touched.username && formik.errors.username && <p>{formik.errors.username}</p>}

//         {/* First Name */}
//         <label>First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.firstName}
//         />
//         {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}

//         {/* Last Name */}
//         <label>Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.lastName}
//         />
//         {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}

//         {/* Submit Button */}
//         <button type="submit" disabled={isPending}>
//           {isPending ? 'Registering...' : 'Register'}
//         </button>

//         {/* API Error */}
//         {error && <p style={{ color: 'red' }}>{error.message}</p>}
//       </form>
//     </div>
//   );
// }
