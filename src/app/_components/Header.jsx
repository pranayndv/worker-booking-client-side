"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut, SessionProvider } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { data } = useSession();

  console.log(data);

  return (
    <header className="bg-black bg-cover backdrop-blur-lg">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-start md:justify-between md:gap-16">
          <div className="md:flex md:items-center md:gap-12">
            <div className="">
              {/* <Image src='/logo.svg' alt='logo' height={90} width={80} className='object-cover' /> */}
              <span className="text-white text-2xl font-medium logo-font">
                Bookie
              </span>
            </div>
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] py-2 px-3 rounded-3xl"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    className="text-white hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] py-2 px-3 rounded-3xl"
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] py-2 px-3 rounded-3xl"
                    href="/"
                  >
                    My Bookings
                  </a>
                </li>
                <li>
                  <a
                    className="text-white hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] py-2 px-3 rounded-3xl"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <Link
                    className="text-white hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] py-2 px-3 rounded-3xl"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    className="text-white hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] py-2 px-3 rounded-3xl"
                    href="/"
                  >
                    T & C
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center md:justify-end ">
            <div className="sm:flex sm:gap-2">
              <a
                href="#"
                className="text-white transition px-3 py-2.5 text-sm font-medium hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] rounded-3xl"
              >
                EN
              </a>
              <a
                href="#"
                className="text-white transition px-3 py-2.5 text-sm font-medium hover:transition hover:ease-in-out hover:duration-500 hover:bg-[#54545497] rounded-3xl"
              >
                Help
              </a>
              <div className="col-3 text-center flex justify-center items-center text-white">
                {data?.user ? (
                  <>
                    <span className="flex space-x-2 justify-center items-center">
                      <span
                        style={{ marginRight: "15px" }}
                        className="flex space-x-2 justify-center items-center"
                      >
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <img
                              src={data?.user?.image}
                              height="35"
                              width="35"
                              alt="user image"
                              className="rounded-full"
                            />
                          </DropdownMenuTrigger>

                        </DropdownMenu>

                        <p className="text-white"> Hi, {data?.user?.name}</p>
                      </span>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => signOut()}
                        className="rounded-3xl bg-white hover:bg-slate-100 transition px-5 py-2.5 text-sm font-medium text-black shadow"
                      >
                        Logout
                      </span>
                    </span>
                  </>
                ) : (
                  <span style={{ marginRight: "15px" }}>
                    {" "}
                    <Link
                      className="nav-link rounded-3xl mx-2 bg-white hover:bg-slate-100 transition px-5 py-2.5 text-sm font-medium text-black shadow"
                      href="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="rounded-3xl mx-2 bg-white hover:bg-slate-100 transition px-5 py-2.5 text-sm font-medium text-black shadow"
                      href="/register/customer"
                    >
                      Register
                    </Link>
                  </span>
                )}
              </div>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderWithSession = () => {
  return (
    <SessionProvider>
      <Header />
    </SessionProvider>
  );
};

export default HeaderWithSession;
