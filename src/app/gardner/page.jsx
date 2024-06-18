import Link from "next/link"
export default function Gardner(){
    return(
    <section className="text-center mt-6">
       <h2 className="text-2xl font-bold text-black/80">All Gardner Services</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-2 w-[95%] backdrop-blur-sm bg-slate-100 m-6  p-4">

            <Link href="/gardner/wc" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center ">
                <img src="/img/gardner/wc.png" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10  hover:text-3xl">
                Woodcutter
                </a>
            </div>
            </Link>
            <Link href="/gardner/wc" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center ">
                <img src="/img/gardner/grasscutter.png" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10  hover:text-3xl">
                Grasscutter
                </a>
            </div>
            </Link>
            <Link href="/gardner/wc" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center ">
                <img src="/img/gardner/gardner.png" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10  hover:text-3xl">
                Gardner
                </a>
            </div>
            </Link>
            <Link href="/gardner/wc" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center ">
                <img src="/img/gardner/tc.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10  hover:text-3xl">
                Tree Climber
                </a>
            </div>
            </Link>
           </div>
    </section>
    )
}