"use client"
import AuthForm from '@/components/form/AuthForm'
import {  SignUpSchema } from '@/lib/validations'
import React from 'react'

const SignUp = () => {
  return (
    <div>
      <AuthForm 
      Schema={SignUpSchema}
      formType="signup"
      defaultValues={{name:"" , username:"" ,email:"" , password:"" }}
      onSubmit={(data)=>Promise.resolve({success:true, data})}

      />
    </div>
  )
}

export default SignUp