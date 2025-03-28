"use client"
import AuthForm from '@/components/form/AuthForm'
import { SignInSchema } from '@/lib/validations'
import React from 'react'


const SignIn  = () => {
  return (
    <div className=''>
        <AuthForm 
        Schema={SignInSchema}
        formType='signin'
        defaultValues={{email:"" , password:""}}
        onSubmit={(data)=>Promise.resolve({success:true, data})}
          />
    </div>
  )
}

export default  SignIn