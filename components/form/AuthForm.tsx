"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form'
import { z, ZodSchema } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'

interface AuthFormProps<T extends FieldValues> {
    defaultValues : T;
    Schema:ZodSchema<T>;
    onSubmit:(data:T)=> Promise<{success : boolean}>;
    formType :"signin" | "signup";
}


const AuthForm =<T extends FieldValues> ({
    Schema,
    defaultValues,
    onSubmit,
    formType
    } :AuthFormProps<T> ) => {
    

    const form = useForm<z.infer<typeof Schema>>({
        resolver:zodResolver(Schema),
        defaultValues:defaultValues as DefaultValues<T>

    })
    const handleSubmit: SubmitHandler<T> = async (data) => {
      console.log("Form Submitted:", data); // Log the submitted form values
      await onSubmit(data); // Call the passed onSubmit function
    };
      return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col  max-sm:gap-4 gap-7'  >
        {
          Object.keys(defaultValues).map((field)=>(
              <FormField 
                key={field} 
                control={form.control}
                name={field as keyof T as Path<T>}
                render={({field})=>(
                  <FormItem>
                    <FormLabel className='text-xl  md:text-4xl capitalize' >{field.name}</FormLabel>
                    <FormControl>
                      <Input  
                      className=' max-sm:min-h-6 min-h-12 no-focus rounded-1.5  '
                      type={field.name ==="password" ? "password" : "text"}
                      {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                )}
                />
              )) 
            }
            <Button className='w-full  min-h-12 rounded-1.5 hover:bg-white hover:text-black transition-colors ease-in-out cursor-pointer duration-150'>{formType}</Button>
      </form>


      <div className="mt-2 text-lg text-black font-bold font-rounded-c ">
      {
        formType ==="signin"?
        <p>Don&apos;t have an account <Link  className='font-xl text-white font-bowlby-sc font-extralight max-sm:text-xs' href="/signup">Sign Up  </Link></p>:
        <p>Already have an account <Link  className='font-xl text-white font-bowlby-sc font-extralight   max-sm:text-xs' href="/signin">Sign In</Link></p>
        
      }
      </div>

    </Form>

  )
}

export default AuthForm