"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Login = () => {
  // Define the type based on the schema
type FormData = {
  username: string;
  password: string;
};
  const formSchema = z.object({
    username:z.string().min(5).max(30),
    password:z.string().min(8).max(20)
  })
  const form = useForm({
    resolver:zodResolver(formSchema),
    defaultValues:{
      username:"",
      password:""
    }
  })
  const onSubmit = (data:FormData)=>{
    console.log("Submitted",data)
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
          control={form.control}
          name='username'
          render = {({field})=>(
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='enter your username' {...field} />
              </FormControl>
            </FormItem>
          )}
          />
          <FormField 
          control={form.control}
          name='password'
          render={({field})=>(
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='Enter your Password' {...field} />
              </FormControl>
            </FormItem>
          )}
          />
          <Button>Login</Button>
        </form>
      </Form>
    </div>
  )
}

export default Login