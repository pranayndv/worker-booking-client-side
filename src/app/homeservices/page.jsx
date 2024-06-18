import Link from "next/link"
export default function Homeservices(){
    return(
    <section className="text-center mt-6">
       <h2 className="text-2xl font-bold text-black/80">All home Services</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[95%] backdrop-blur-sm bg-slate-100 m-6 p-4">

            <Link href="https://pages.razorpay.com/stores/bookie" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center ">
                <img src="/img/Homeservices/AC.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10  hover:text-3xl">
                AC Repair
                </a>
            </div>
            </Link>

            <Link href="https://rzp.io/i/WpSJyWk" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/refrigerator.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	Refrigerator Repair
                </a>
            </div>
            </Link>

            <Link href="/homeservices/wm" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/WM.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	Washing Machine Repair
                </a>
            </div>
            </Link>

            <Link href="/homeservices/geezer" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/geezer.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	Geezer Repair
                </a>
            </div>
            </Link>

            <Link href="/homeservices/tv" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/tv.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	TV Repair
                </a>
            </div>
            </Link>

            <Link href="/homeservices/stove" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/stove.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	Stove Repair
                </a>
            </div>
            </Link>

            <Link href="/homeservices/wp" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/purifier.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	Water Purifier Repair
                </a>
            </div>
            </Link>

            <Link href="/homeservices/mixerg" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/mixer.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	Mixer Grinder Repair
                </a>
            </div>
            </Link>

            <Link href="/homeservices/cctv" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/Homeservices/cctv.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                	CCTV Repair
                </a>
            </div>
            </Link>
           </div>
    </section>
    )
}