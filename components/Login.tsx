"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
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
    username:z.string().min(5 , {message:"Minimum of 5 characters is required"}).max(30),
    password:z.string().min(8 , {message:"Minimum of 8 characters is required"}).max(20)
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
   
      <Form {...form}>
        <form className='min-w-[448px] h-[500px] bg-blue-200 rounded-2xl shadow-2xl p-6 flex flex-col gap-4' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
          control={form.control}
          name='username'
          render = {({field})=>(
            <FormItem >
              <FormLabel className='text-2xl'>Username</FormLabel>
              <FormControl>
                <Input className='bg-white min-h-[56px] w-full' placeholder='enter your username' {...field} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          />
          <FormField 
          control={form.control}
          name='password'
          render={({field})=>(
            <FormItem>
              <FormLabel className='text-2xl'>Password</FormLabel>
              <FormControl>
                <Input className='bg-white min-h-[56px] w-full' placeholder='Enter your Password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <Button className= 'cursor-pointer  h-[56px]'>Login</Button>
          <div className="w-full flex justify-between gap-4">

          <Button className= 'bg-blue-600 flex-1 h-[56px] hover:bg-blue-500 cursor-pointer '>Login with Google</Button>
          <Button className= 'bg-blue-600 flex-1 h-[56px] hover:bg-blue-500 cursor-pointer'>Login with GitHub</Button>

          </div>
        </form>
      </Form>
    
  )
}

export default Login