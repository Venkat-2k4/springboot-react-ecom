import React, { ReactNode } from 'react'

const Authlayout = ({children}:{children:ReactNode}) => {
  return (
    <main className=" py-20 px-20 flex items-center justify-center  w-full min-h-screen">
      <section className= "space-y-2.5 text-white bg-[url('/bg-texture.webp')]  bg-blue-400 bg-cover bg-no-repeat bg-center rounded-3xl max-sm:p-4 p-10  min-w-[300px]  ">
        <div className="space-y-2.5">
          <h1 className='font-bowlby-sc text-center  text-4xl'>ElectRound</h1>
          <p className=' max-sm:text-xs font-rounded-c font-bold text-black'>Premium Tech, Budget Price! Join us and <br />shop high-quality refurbished electronics at unbeatable prices.</p>
        </div>
        {children}
      </section>
    </main>
  )
}

export default Authlayout