import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="items-center grid grid-cols-[auto,auto] md:grid-cols-[1fr,auto,1fr] gap-4 md:gap-6">


    <Link href="/" className=' justify-self-center font-varela-round text-4xl font-semibold '>ElectRound</Link>
    <div className='max-md:place-self-start row-start-2 md:row-start-1 md:col-start-2 flex justify-around gap-8 px-8 items-center  font-varela-round rounded-4xl  h-16 bg-white'>
        <Link className='flex group' href="/">Laptops <Image src="/icons/down.svg" alt='icon' height={20} width={20}   className='group-hover:rotate-90'/></Link>
        <Link className='flex  group' href="/">Mobiles <Image src="/icons/down.svg" alt='icon' height={20} width={20}  className='group-hover:rotate-90'/></Link>
        <Link className='flex  group' href="/">Watches <Image src="/icons/down.svg" alt='icon' height={20} width={20}  className='group-hover:rotate-90'/></Link>
    </div>
        
    <div className="col-start-2 max-md:row-start-2 lg:row-start-1 lg:col-start-3 justify-self-end flex max-lg:flex-col  gap-2">
        {
            navLinks.map((link , index)=>(
                <div className="bg-black p-5  lg:rounded-b-4xl  max-lg:rounded-l-4xl" key={index}>
                    <Link href={link.route}>
                        <Image className='fill-black' src={link.imgUrl} alt={link.alt} width={25} height={25}  />
                    </Link>
                </div>
            ))
        }

    </div>
    </div>
  )
}

export default NavBar