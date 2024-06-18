import Link from 'next/link'
import React from 'react'

function services() {
  return (
    < section className="text-center">


            <h2 className="text-2xl font-bold text-black/80">Call by Category</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[95%] backdrop-blur-sm bg-slate-100 m-6 p-4">

            <Link href="/homeservices" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center ">
                <img src="/img/maincategory/home.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10  hover:text-3xl">
                    Home Services
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/construction" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/construction.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Construction
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/electrician" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/electrician.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Electrician
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/furniture" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/furniture.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Furniture
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/gardner" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/gardner.png" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Gardner
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/vehicleservices" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/vehicle.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Vehicles
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/transport" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/transport.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Transport
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/contractor" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/house.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Contractors
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="/rental" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/rent.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Rental
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>

            <Link href="" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/maincategory/automation.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-white z-10 hover:text-3xl">
                    Home Automation
                </a>
            <div className="absolute inset-0 bg-gradient-to-t rounded-md from-[#222121] to-transparent"></div>
            </div>
            </Link>
           </div>

           <section>
            <div className="relative bg-[url('/img/map.jpg')] flex flex-col bg-cover bg-center text-center pt-4">
            <span className="text-white z-20 font-semibold text-2xl">Get status</span>
            <div className=" flex justify-center items-center w-[100%] h-[10rem] space-x-4">
            <input type="text" name="" className=" h-[3rem] p-5 rounded-md outline-none z-10" id="" placeholder="Service ID"/>
            <button className="w-[8rem] h-[3rem] rounded-md bg-white z-10">
                Track
            </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l rounded-md from-black to-transparent "></div>
            </div>

        </section>
</section>
  )
}

export default services