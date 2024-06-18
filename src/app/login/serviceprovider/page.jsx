"use client";
import Link from 'next/link'
import {Typography,Checkbox} from "@material-tailwind/react";

export default function Login(){
    return(
    <section className="my-6">
<div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
    <div class="hidden bg-cover lg:block lg:w-1/2 bg-[url('/img/login/logbg.jpg')]"></div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div class="flex justify-center mx-auto">
            <h2 className="text-black text-3xl font-medium logo-font">Bookie</h2>
        </div>

        <p class="mt-3 text-xl text-center text-black/80 ">
            Welcome back Service provider!
        </p>
         
         <div className='w-[384px] h-[49.6px] mt-[16px]'>

         </div>
  
        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                with email</a>

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <div class="mt-4">
            <label class="block mb-2 text-sm font-medium text-black dark:text-gray-800" for="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" class="block w-full px-4 py-2 bg-white border rounded-full dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
        </div>

        <div class="mt-4">
            <div class="flex justify-between">
                <label class="block mb-2 text-sm font-medium text-black dark:text-gray-800" for="loggingPassword">Password</label>
                <a href="#" class="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
            </div>

            <input id="loggingPassword" class="block w-full px-4 py-2  bg-white border rounded-full dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
        </div>

        <div class="mt-6">
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
            </button>
        </div>
         <div className='flex flex-col justify-center items-center gap-3'>
        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link href="/register/customer" class="text-xs w-[8rem] text-gray-500 uppercase dark:text-gray-400 hover:underline">or Register</Link>
 
            <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
        <Link href="/login" class="px-[4rem] py-[0.2rem] border text-gray-500   border-gray-500 rounded-xl ">For Customer</Link>
        </div>
    </div>
</div>
    </section>
    )
}