"use client";
import React, { useState } from "react";
import Link from "next/link";
import InputComponent from "../map/input/page";

const Banner = () => {

  const items = [
    {
      name: "Sophia Martinez",
      title: "Lead designer, Avalon",
      image:
        "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
      body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
    },
    {
      name: "Caroline Lee",
      title: "Senior Graphic Designer, Echo",
      image:
        "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
      body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
    },
    {
      name: "Tyler Otwell",
      title: "CTO, Apple",
      image:
        "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
      body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
    },
    {
      name: "Jake Harris",
      title: "Thompson Creative",
      image:
        "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
      body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
    },
  ];
  return (
    <div className="w-full bg-white pt-10 px-4">
      <div className="space-y-2 text-center h-[15rem] flex flex-col justify-center items-center bg-black rounded-xl bg-cover backdrop-blur-lg mb-6 ">
        <span className="text-[2.5rem] text-white font-bold ">
          Call Anywhere with bookie
        </span>
        <div className="flex justify-center items-center space-x-4">

          <Link href="/map"  type="submit" className="text-red flex justify-center items-center hover:before:bg-redborder-red-500 relative h-[50px] w-[15rem] overflow-hidden rounded-md bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover:text-black hover:shadow-gray-500 hover:before:left-0 hover:before:w-full hover:scale-105 duration-300">
            <span className="relative z-10">Search nearby services</span>
          </Link>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 font-bold ">WELCOME TO BOOKIE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            India’s largest service Platform
          </h1>
          <p>
            Bookie revolutionizes the way you access services by bringing them
            directly to your doorstep. Whether it's home cleaning, repairs,
            beauty services, or any other household need, Bookie connects you
            with trusted professionals who provide top-quality services right at
            your convenience. Say goodbye to the hassle of scheduling
            appointments and traveling to service providers – with Bookie.com,
            your home becomes the ultimate destination for all your service
            needs.
          </p>
          <Link
            href="/services"
            className="bg-black text-white hover:bg-gray-800  w-[200px]  font-medium my-6 mx-auto md:mx-0 py-3 px-2 pl-3 rounded-lg hover:scale-105 duration-300"
          >
            Get Started
          </Link>
        </div>
        <img
          className="w-[500px] mx-auto my-4"
          src="/img/banner/item.jpg"
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[600px] mx-auto my-4"
          src="/img/banner/item1.jpg"
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Customer Satisfaction
          </h1>
          <p>
            At Bookie.com, our ultimate goal is your satisfaction. We strive to
            exceed your expectations by delivering exceptional services right at
            your doorstep. Your satisfaction is our priority, and we are
            committed to providing you with convenient, reliable, and
            top-quality services that leave you delighted every time. Experience
            the joy of hassle-free service delivery and join the countless
            satisfied customers who trust Bookie.com for all their home service
            needs.
          </p>
          <Link
            href="/services"
            className="bg-black text-white hover:bg-gray-800  w-[200px]  font-medium my-6 mx-auto md:mx-0 py-3 px-2 pl-3 rounded-lg hover:scale-105 duration-300"
          >
            Know more
          </Link>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Know us better
          </h1>
          <p>
            We're not just a service provider—we're your trusted partner in
            bringing convenience and quality to your doorstep. Discover the
            difference with Bookie.com and experience seamless, reliable home
            services tailored to your needs. Let's embark on a journey together
            towards convenience, satisfaction, and excellence.
          </p>
          <Link
            href="/"
            className="bg-black text-white hover:bg-gray-800  w-[200px]  font-medium my-6 mx-auto md:mx-0 py-3 px-2 pl-3 rounded-lg hover:scale-105 duration-300"
          >
            Know More
          </Link>
        </div>
        <img
          className="w-[500px] mx-auto my-4"
          src="/img/banner/item3.jpg"
          alt="/"
        />
      </div>


      <section className="text-center">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Top Categories
          </h1>
      <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-3 gap-10'>
      <div className='w-full shadow-xl bg-gray-100 flex flex-col justify-center item-center p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
        <svg viewBox="0 0 24 24" className="w-16 max-w-16 m-auto" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5315 11.5857L20.75 10.9605V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4143 22.4142 22.75 22 22.75H2.00003C1.58581 22.75 1.25003 22.4143 1.25003 22C1.25003 21.5858 1.58581 21.25 2.00003 21.25H3.25003V10.9605L2.46855 11.5857C2.1451 11.8445 1.67313 11.792 1.41438 11.4686C1.15562 11.1451 1.20806 10.6731 1.53151 10.4144L9.65742 3.91366C11.027 2.818 12.9731 2.818 14.3426 3.91366L22.4685 10.4144C22.792 10.6731 22.8444 11.1451 22.5857 11.4686C22.3269 11.792 21.855 11.8445 21.5315 11.5857ZM12 6.75004C10.4812 6.75004 9.25003 7.98126 9.25003 9.50004C9.25003 11.0188 10.4812 12.25 12 12.25C13.5188 12.25 14.75 11.0188 14.75 9.50004C14.75 7.98126 13.5188 6.75004 12 6.75004ZM13.7459 13.3116C13.2871 13.25 12.7143 13.25 12.0494 13.25H11.9507C11.2858 13.25 10.7129 13.25 10.2542 13.3116C9.76255 13.3777 9.29128 13.5268 8.90904 13.9091C8.52679 14.2913 8.37773 14.7626 8.31163 15.2542C8.24996 15.7129 8.24999 16.2858 8.25003 16.9507L8.25003 21.25H9.75003H14.25H15.75L15.75 16.9507L15.75 16.8271C15.7498 16.2146 15.7462 15.6843 15.6884 15.2542C15.6223 14.7626 15.4733 14.2913 15.091 13.9091C14.7088 13.5268 14.2375 13.3777 13.7459 13.3116Z" fill="#000000"></path> <g opacity="0.5"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 9.5C10.75 8.80964 11.3096 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3096 10.75 10.75 10.1904 10.75 9.5Z" fill="#000000"></path> </g> <path opacity="0.5" d="M12.0494 13.25C12.7142 13.25 13.2871 13.2499 13.7458 13.3116C14.2375 13.3777 14.7087 13.5268 15.091 13.909C15.4732 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827L15.75 21.25H8.25L8.25 16.9506C8.24997 16.2858 8.24993 15.7129 8.31161 15.2542C8.37771 14.7625 8.52677 14.2913 8.90901 13.909C9.29126 13.5268 9.76252 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9506 13.25H12.0494Z" fill="#000000"></path> <path opacity="0.5" d="M16 3H18.5C18.7761 3 19 3.22386 19 3.5L19 7.63955L15.5 4.83955V3.5C15.5 3.22386 15.7239 3 16 3Z" fill="#000000"></path> </g></svg>
              <h2 className='text-2xl font-bold text-center '>Home Services</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/homeservices" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
          <svg viewBox="0 0 24 24"  className="w-16 m-auto  max-w-16"  fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 17.25L15.75 17.25L15.75 15L19.5 15L19.5 17.25ZM19.5 13.5L19.5 9.75L15.75 9.75L15.75 6L10.5 6L9 6L4.5 6L4.5 9.75L3 9.75L3 15L4.5 15L4.5 18.75L9 18.75L10.5 18.75L14.25 18.75L15.75 18.75L21 18.75L21 13.5L19.5 13.5ZM18 13.5L18 11.25L15.75 11.25L14.25 11.25L14.25 13.5L15.75 13.5L18 13.5ZM14.25 15L12.75 15L10.5 15L10.5 17.25L14.25 17.25L14.25 15ZM12.75 11.25L12.75 13.5L9 13.5L9 11.25L10.5 11.25L12.75 11.25ZM9 15L9 17.25L6 17.25L6 15L9 15ZM14.25 7.5L10.5 7.5L10.5 9.75L14.25 9.75L14.25 7.5ZM4.5 11.25L4.5 13.5L7.5 13.5L7.5 11.25L4.5 11.25ZM6 9.75L9 9.75L9 7.5L6 7.5L6 9.75Z" fill="#000000"></path> </g></svg>
              <h2 className='text-2xl font-bold text-center '>Construction</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/contruction" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
            <img src="/img/banner/electrician.svg"className="w-16 m-auto  max-w-16" alt="" />
              <h2 className='text-2xl font-bold text-center '>Electrician</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/electrician" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full  shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
          <img src="/img/banner/furniture.svg"className="w-16 m-auto  max-w-16" alt="" />
              <h2 className='text-2xl font-bold text-center '>furniture</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/furniture" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
          <img src="/img/banner/gardner.svg"className="w-16 m-auto  max-w-16" alt="" />
              <h2 className='text-2xl font-bold text-center '>Gardener</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/gardner" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
          <img src="/img/banner/vehicle.svg"className="w-16 m-auto  max-w-16" alt="" />
              <h2 className='text-2xl font-bold text-center '>Vehicle</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/vehicle" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
          <img src="/img/banner/transport.svg"className="w-16 m-auto  max-w-16" alt="" />
              <h2 className='text-2xl font-bold text-center '>Transport</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/transport" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
          <img src="/img/banner/contractor.svg"className="w-16 m-auto  max-w-16" alt="" />
              <h2 className='text-2xl font-bold text-center '>Contractor</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/contractor" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0  rounded-lg hover:scale-105 duration-300'>
          <img src="/img/banner/rental.svg"className="w-16 m-auto  max-w-16" alt="" />
              <h2 className='text-2xl font-bold text-center '>Rental</h2>
              <div className='text-center font-medium'>
              </div>
              <Link href="/rental" className="my-3 flex justify-center items-center mx-auto text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden rounded-md bg-black px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 hover: hover:shadow-gray-500 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-white">View</span>
          </Link>
          </div>
         
      </div>
      </section>

      <div className="w-[90vw] mx-auto h-[80vh] ml-[10rem] text-center bg-[url('/img/banner/bg.png')] bg-cover pt-10 ">
        <div className="flex flex-col justify-center items-center w-[840px] mt-[10rem] mx-auto ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Our Impact
          </h1>
          <p className="text-xl">
            Our nationwide presence has revolutionized the notion of local
            commuting, making doorstep connectivity accessible and
            cost-effective for everyone.
          </p>
          <div className="flex space-x-10 mt-7">
            <div className="  w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center rounded-full hover:scale-105 duration-300">
              <svg
                className="w-14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M19.5 7.5C19.5 8.88071 18.3807 10 17 10C15.6193 10 14.5 8.88071 14.5 7.5C14.5 6.11929 15.6193 5 17 5C18.3807 5 19.5 6.11929 19.5 7.5Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M4.5 7.5C4.5 8.88071 5.61929 10 7 10C8.38071 10 9.5 8.88071 9.5 7.5C9.5 6.11929 8.38071 5 7 5C5.61929 5 4.5 6.11929 4.5 7.5Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M22 16.5C22 17.8807 20.2091 19 18 19C15.7909 19 14 17.8807 14 16.5C14 15.1193 15.7909 14 18 14C20.2091 14 22 15.1193 22 16.5Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    opacity="0.4"
                    d="M2 16.5C2 17.8807 3.79086 19 6 19C8.20914 19 10 17.8807 10 16.5C10 15.1193 8.20914 14 6 14C3.79086 14 2 15.1193 2 16.5Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
              <p>500+ K</p>
              <h3 className="font-bold text-xl">Users</h3>
            </div>
            <div className=" w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center rounded-full hover:scale-105 duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-14"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 21.25C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H21H18.5H17V16C17 14.1144 17 13.1716 16.4142 12.5858C15.8284 12 14.8856 12 13 12H11C9.11438 12 8.17157 12 7.58579 12.5858C7 13.1716 7 14.1144 7 16V21.25H5.5H3H2ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H14C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15ZM9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18Z"
                    fill="#4f4f4f"
                  ></path>{" "}
                  <g opacity="0.5">
                    {" "}
                    <path
                      d="M8 4.5C8.94281 4.5 9.41421 4.5 9.70711 4.79289C10 5.08579 10 5.55719 10 6.5L9.99999 8.29243C10.1568 8.36863 10.2931 8.46469 10.4142 8.58579C10.8183 8.98987 10.9436 9.56385 10.9825 10.5V12C9.10855 12 8.16976 12.0018 7.58579 12.5858C7 13.1716 7 14.1144 7 16V21.25H3V12C3 10.1144 3 9.17157 3.58579 8.58579C3.70688 8.46469 3.84322 8.36864 4 8.29243V6.5C4 5.55719 4 5.08579 4.29289 4.79289C4.58579 4.5 5.05719 4.5 6 4.5H6.25V3C6.25 2.58579 6.58579 2.25 7 2.25C7.41421 2.25 7.75 2.58579 7.75 3V4.5H8Z"
                      fill="#4f4f4f"
                    ></path>{" "}
                    <path
                      d="M20.6439 5.24676C20.2877 4.73284 19.66 4.49743 18.4045 4.02663C15.9493 3.10592 14.7216 2.64555 13.8608 3.2421C13 3.83864 13 5.14974 13 7.77195V12C14.8856 12 15.8284 12 16.4142 12.5858C17 13.1716 17 14.1144 17 16V21.25H21V7.77195C21 6.4311 21 5.76068 20.6439 5.24676Z"
                      fill="#4f4f4f"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <p>15+</p>
              <h3 className="font-bold text-xl">Cities</h3>
            </div>
            <div className="  w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center rounded-full hover:scale-105 duration-300">
              <img src="/img/banner/worker.svg" className="w-14" alt="" />
              <p>20+ K</p>
              <h3 className="font-bold text-xl">Workers</h3>
            </div>
            <div className=" w-[10rem] h-[10rem] bg-white flex flex-col justify-center items-center rounded-full hover:scale-105 duration-300">
              <img src="/img/banner/customer.svg" className="w-14" alt="" />
              <p>200+ K</p>
              <h3 className="font-bold text-xl">Customers</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          Bookie Business Solutions
          </h1>
          <p>
          Bookie Business Solutions offers innovative and reliable services tailored to meet your needs right at your doorstep. From home maintenance to professional consultations, we bring convenience and efficiency to your daily life. Experience seamless solutions with Bookie Business Solutions.
          </p>
          <Link
            href="/"
            className="bg-black text-white hover:bg-gray-800  w-[200px]  font-medium my-6 mx-auto md:mx-0 py-3 px-2 pl-3 rounded-lg hover:scale-105 duration-300"
          >
            Know More
          </Link>
        </div>
        <img
          className="w-[500px] mx-auto my-4"
          src="/img/banner/item4.jpg"
          alt="/"
        />
      </div>


      <section>
        <div className="relative flex h-auto mt-4 px-[-1rem] w-full items-center">
          <div className="relative flex max-w-[100vw] overflow-hidden py-5 ">
            <div className="flex w-max animate-marquee [--duration:30s]  hover:[animation-play-state:paused]">
              {[...items, ...items].map((item, index) => (
                <div key={index} className="h-full px-2.5">
                  <div className="relative h-full w-[28rem] rounded-2xl border border-black bg-white px-8 py-6">
                    <div className="pb-4 font-light text-black">
                      {item.body}
                    </div>

                    <div className="mt-auto flex items-center gap-4">
                      <img src={item.image} className="h-9 w-9 rounded-full" />

                      <div className="flex flex-col text-sm">
                        <div className="">{item.name}</div>

                        <div className="text-black">{item.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
     

    </div>
  );
};

export default Banner;
export {InputComponent};