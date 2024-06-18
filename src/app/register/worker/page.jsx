"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

export default function Worker() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState("Select Service");
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectservice = (service) => {
    setSelectedServices(service);
    setIsOpen(false);
  };

  const subservices = {
    "Home Services": [
      "Ac Repair",
      "Refrigerator Repair",
      "Washing Machine Repair",
      "Geezer Repair",
      "TV repair",
      "Stove Repair",
      "Water Purifier Repair",
      "Mixer Grinder Repair",
      "CCTV Repair",
    ],
    "Construction Services": [
      "JCB",
      "Architecture",
      "Concrete Mixers",
      "Centering",
      "Mason",
      "Plumber",
      "Plaster",
      "Tile Installer",
      "Painters",
      "Ceiling Designers",
    ],
    "Electric Services": ["Electrician", "Wireman"],
    "Furniture Services": ["Carpentor", "Metal Fabricator"],
    "Gardner Services": [
      "Wood Cutter",
      "Grass Cutter",
      "Gardner",
      "Tree Climber",
    ],
    "Vehicle Services": ["Tow Wheeler", "Four Wheeler"],
    "Transport Services": ["Truck & Tempo", "Driver"],
    "Rental Services": ["House", "Room"],
  };


//otp
function onCaptchVerify() {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignup();
        },
        "expired-callback": () => {},
      },
      auth
    );
  }
}

function onSignup() {
  setLoading(true);
  onCaptchVerify();

  const appVerifier = window.recaptchaVerifier;

  const formatPh = "+" + ph;

  signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sended successfully!");
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
}

function onOTPVerify() {
  setLoading(true);
  window.confirmationResult
    .confirm(otp)
    .then(async (res) => {
      console.log(res);
      setUser(res.user);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}

  return (
    <section class="bg-white ">
      <form action="Submit">
        <div class="flex justify-center min-h-screen">
          <div class="flex items-center w-full max-w-[55rem] p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
              <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                Get your account now.
              </h1>

              <p class="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <div class="mt-6">
                <h1 class="text-gray-500 dark:text-gray-300">
                  Select type of account
                </h1>

                <div class="mt-3 space-y-2 md:flex md:items-center md:-mx-2">
                  <Link
                    href="/register/customer"
                    class="flex justify-center text-center w-full px-6 py-3  bg-white border border-black rounded-lg md:w-auto md:mx-2 "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="mx-2 ">Customer</span>
                  </Link>

                  <Link
                    href=""
                    class="flex justify-center text-center w-full px-6 py-3  bg-black border  rounded-lg md:w-auto md:mx-2 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-slate-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span class="mx-2 text-white">Service Provider</span>
                  </Link>
                </div>
              </div>

              <form class="">
                <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Middle Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Middle Name"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      placeholder="XXX-XX-XXXX-XXX"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="XXX-XX-XXX-XX"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Email@example.com"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Country
                    </label>
                    <input
                      type="dropdown"
                      placeholder="Country"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="State"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Tal
                    </label>
                    <input
                      type="text"
                      placeholder="Tal"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Pin code
                    </label>
                    <input
                      type="text"
                      placeholder="Pin code"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  {/* services dropdown start */}

                  <div className="relative ">
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Select Service
                    </label>
                    <button
                      type="button"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                      onClick={toggleDropdown}
                    >
                      <span className="flex justify-between items-center">
                        {selectedServices}
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Select Service")}
                          >
                            Select Service
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Home Services")}
                          >
                            Home Services
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() =>
                              selectservice("Construction Services")
                            }
                          >
                            Construction Services
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Electric Services")}
                          >
                            Electric Services
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Furniture Services")}
                          >
                            Furniture Services
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Gardner Services")}
                          >
                            Gardner Services
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Vehicle Services")}
                          >
                            Vehicle Services
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Transport Services")}
                          >
                            Transport Services
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Contractor")}
                          >
                            Contractor
                          </li>
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => selectservice("Rental Services")}
                          >
                            Rental Services
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* services dropdown end */}

                  {/*Sub services dropdown start */}
                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Select Service Category
                    </label>
                    {selectedServices && (
                      <select className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                        <option value="" selected>
                          Select Category
                        </option>
                        {subservices[selectedServices]?.map((serv, index) => (
                          <option
                            className="block h-[3rem] px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            key={index}
                          >
                            {serv}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  {/*Sub services dropdown end */}

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="flex flex-col justify-center w-full ">
                  <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Upload ID proof
                    </label>
                    <label
                      for="idProof"
                      class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="idProof" type="file" class="hidden" />
                    </label>
                  </div>

                  <div class="flex flex-col justify-center w-full ">
                  <label class="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                      Upoload resume
                    </label>
                    <label
                      for="resume"
                      class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="resume" type="file" class="hidden" />
                    </label>
                  </div>

                </div>

                <div>
              <Toaster toastOptions={{ duration: 4000 }} />
              <div id="recaptcha-container"></div>
              {user ? (
                <h2 className="text-center text-sm text-gray-800 dark:text-gray-600">
                  Verification successfully!
                </h2>
              ) : (
                <div className="w-80 flex  gap-4 rounded-lg p-4 ml-[-1rem] my-4">
                  {showOTP ? (
                    <>
                      <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full"></div>
                      <label
                        htmlFor="otp"
                        className="text-sm text-gray-800 dark:text-gray-60  text-center"
                      >
                        Enter your OTP
                      </label>
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        autoFocus
                        className="opt-container "
                      ></OtpInput>
                      <button
                        onClick={onOTPVerify}
                        className="bg-black text-white mx-2  w-full flex gap-1 items-center justify-center rounded-md px-8 py-[0.3rem]"
                      >
                        {loading && (
                          <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                        <span>Verify OTP</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <PhoneInput country={"in"} value={ph} onChange={setPh} />
                      <button
                        onClick={onSignup}
                        className="bg-black text-white mx-2  w-full flex gap-1 items-center justify-center rounded-md px-8 py-[0.3rem]"
                      >
                        {loading && (
                          <CgSpinner
                            size={20}
                            className="mt-1 animate-spin w-3"
                          />
                        )}
                        <span>Verify</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

                <Link href="/register/worker/signup" class="flex items-center justify-between w-[20rem] px-6 py-3 mt-8 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-black/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
