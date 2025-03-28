import { z } from "zod";

export const SignUpSchema = z.object({
    name:z.string()
    .min(3 , {message:"Name should atleast be 3 characters"})
    .max(20 , {message:"Name should only be 20 characters"})
    .regex(/^[a-zA-Z\s]+$/ ,{message : "name can only contain alphabets "})
    ,
    username:z.string()
    .min(8 , {message:"username should at least be 8 characters "})
    .max(20 , {message:"username should only contain 20 characters"})
    .regex(/^[a-zA-Z0-9_]+$/ , {message:"username can only contain letters , numbers and underscores"})
    ,
    email:z.string()
    .min(8 ,{message:"Email must consist 8 characters"})
    .email({message:"Enter an valid email address"})
    ,
    password:z.string()
    .min(8,{message:"password must consist atleast 8 characters"})
    .regex(/[A-Z]/ , {message:"password must contain atleast one Uppercase letter"})
    .regex(/[a-z]/ ,{message:"password must consist atleast one lower case letter"})
    .regex(/[0-9]/ ,{message:"password must consist atleast one number"})
    .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character.",})
})

export const SignInSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please provide a valid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long. " })
      .max(100, { message: "Password cannot exceed 100 characters." }),
  });