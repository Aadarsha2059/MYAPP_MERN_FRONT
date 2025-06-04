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
