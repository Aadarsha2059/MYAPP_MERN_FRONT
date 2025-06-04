import React from 'react'

import { useRegisterUser } from '../../hooks/useRegisterUser'

export default function RegisterForm() {
    const{register, isLoading,data,error} =useRegisterUser()

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
        let response = await register(formData)
        if(response){
            //extra logic eg. navigations
        }
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
