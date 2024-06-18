"use client";
import Link from "next/link";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

export default function Customer() {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

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
    <section className="bg-white ">
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full max-w-[55rem] p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
              Get your account now.
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <div className="mt-6">
              <h1 className="text-gray-500 dark:text-gray-300">
                Select type of account
              </h1>

              <div className="mt-3 space-y-2 md:flex md:items-center md:-mx-2">
                <Link
                  href=""
                  className="flex justify-center text-center w-full px-6 py-3  bg-black border  rounded-lg md:w-auto md:mx-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-neutral-50"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-white">Customer</span>
                </Link>

                <Link
                  href="/register/worker"
                  className="flex justify-center text-center w-full px-6 py-3  bg-white border border-black  rounded-lg md:w-auto md:mx-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
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

                  <span className="mx-2 ">Service Provider</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Middle Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Middle Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="XXX-XX-XXXX-XXX"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Phone Number
                </label>
                <input
                  type="phone"
                  placeholder="XXX-XX-XXXX-XXX"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Email@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Country
                </label>
                <input
                  type="dropdown"
                  placeholder="Country"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  State
                </label>
                <input
                  type="text"
                  placeholder="State"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Tal
                </label>
                <input
                  type="text"
                  placeholder="Tal"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Pin code
                </label>
                <input
                  type="text"
                  placeholder="Pin code"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-800 dark:text-gray-600">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
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

            <Link href="/register/customer/signup" className="flex items-center justify-between w-[20rem] px-6 py-3 mt-8 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-black/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              <span>Sign Up </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 rtl:-scale-x-100"
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
          </div>
        </div>
      </div>
    </section>
  );
}
