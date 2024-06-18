import Link from 'next/link';
export default function Construction(){
    return(
    <section className="text-center mt-6">
       <h2 className="text-2xl font-bold text-black/80">All Construction Services</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[95%] backdrop-blur-sm bg-slate-100 m-6 p-4">

            <Link href="/construction/jcb" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center ">
                <img src="/img/construction/jcb.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10  hover:text-3xl">
                JCB Excavation
                </a>
            </div>
            </Link>

            <Link href="/construction/architecture" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/architecture.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                Architecture
                </a>
            </div>
            </Link>

            <Link href="/construction/cm" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/mixer.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                Concrete Mixers
                </a>
            </div>
            </Link>

            <Link href="/construction/centring" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/centering.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                Centering
                </a>
            </div>
            </Link>

            <Link href="/construction/mason" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/Mason.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                Mason
                </a>
            </div>
            </Link>

            <Link href="/construction/plumber" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/plumber.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                Plumber
                </a>
            </div>
            </Link>

            <Link href="/construction/plaster" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/plaster.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                Plaster
                </a>
            </div>
            </Link>

            <Link href="/construction/tiles" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/TI.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                Tile Installer
                </a>
            </div>
            </Link>

            <Link href="/construction/painters" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/painter.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                 Painters
                </a>
            </div>
            </Link>

            <Link href="/construction/cd" className="m-auto hover:opacity-[0.95] hover:scale-105 duration-300">
            <div className="relative shadow-xl w-[20rem] rounded-md h-[20rem] my-6 bg-white flex flex-col justify-center items-center">
                <img src="/img/construction/ceiling.jpg" alt=""  className=" w-[15rem] h-[15rem]"/>
                <a href="" className=" text-2xl font-bold text-black z-10 hover:text-3xl">
                 Ceiling Designers
                </a>
            </div>
            </Link>
           </div>
    </section>
    )
}