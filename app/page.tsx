"use client"

import Link from "next/link";


export default function Home() {
  
  return (
   <div className="">
    <h1 className="text-2xl text-center">ECOMMERCE</h1>
    <Link  href="/signin" >Sign In </Link>
   </div>
  );
}
