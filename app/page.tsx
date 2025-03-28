import NavBar from "@/components/NavBar";



export default function Home() {
  
  return (
   <div className="p-6">

    <div className="p-6 space-y-10 h-[95vh] rounded-4xl w-full bg-cover bg-bottom bg-no-repeat bg-[url('/bg-3.jpg')]">
      <NavBar />
      <div className="lg:pt-60 flex flex-col gap-5 items-center justify-center text-center text-white  ">
        <div className="flex gap-5 flex-row ">
          {/* <div className="w-15 h-5 bg-white rounded-full animate-bounce "></div>
          <div className="w-15 h-5 bg-white rounded-full animate-spin"></div>
          <div className="w-15 h-5 bg-white rounded-full animate-bounce"></div> */}
        </div>
        <p className="font-rounded-c text-4xl">Refurbished Electronics at cheaper and best prices</p>
        <h1 className="text-4xl md:text-8xl font-bowlby-sc">Shop Now</h1>
      </div>
    </div>

   </div>
   
  );
}
