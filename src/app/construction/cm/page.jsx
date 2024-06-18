"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { Textarea } from "@material-tailwind/react";

const DisplayCheckedItems = ({ checkedItems, updateQuantity }) => {
  const handleQuantityChange = (event, itemName) => {
    const quantity = parseInt(event.target.value);
    if (!isNaN(quantity)) {
      updateQuantity(itemName, quantity);
    }
  };

  return (
    <div className=" h-[12rem] flex flex-col justify-between">
      <h2 className="text-xl font-bold mb-2 ">Summary</h2>
      <ul className="list-disc pl-4">
        {checkedItems.map((item, index) => (
          <li key={index} className="flex justify-center items-center space-x-2">
            <span className="flex justify-between items-center ">
              <span className="text-sm w-[6rem] px-2">{item.name}</span>{" "}
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(event, item.name)}
                  className="border border-gray-300 rounded-md w-[5rem] "
                />
            </span> <p className="text-sm">Brass</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.name, "increase")}
                className="px-3 py-1 bg-black text-white rounded-md"
              >
                +
              </button>
              <button
                onClick={() => updateQuantity(item.name, "decrease")}
                className="px-3 py-1 bg-black text-white rounded-md"
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
const cm = () => {
  // State to hold checked items
  const [checkedItems, setCheckedItems] = useState([]);
  // State to hold total price of selected items
  const [totalPrice, setTotalPrice] = useState(0);

  // Handler function for checkbox change
  const handleCheckboxChange = (event) => {
    const { checked, value, dataset } = event.target;
    const price = parseFloat(dataset.price);
    const item = checkedItems.find((item) => item.name === value);

    if (checked) {
      if (item) {
        item.quantity += 1;
      } else {
        const newItem = {
          name: value,
          price,
          quantity: 1,
        };
        setCheckedItems((prevCheckedItems) => [...prevCheckedItems, newItem]);
      }
    } else {
      item.quantity -= 1;
      if (item.quantity === 0) {
        setCheckedItems((prevCheckedItems) =>
          prevCheckedItems.filter((checkedItem) => checkedItem.name !== value)
        );
      }
    }
  };

  // Calculate total price of selected items
  useEffect(() => {
    const amount = checkedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const gst = (amount * 18) / 100;
    const price = amount + gst;
  setTotalPrice(price);
}, [checkedItems]);

  // Update quantity of checked items
  const updateQuantity = (name, actionOrQuantity) => {
    const updatedItems = checkedItems.map((item) => {
      if (item.name === name) {
        if (typeof actionOrQuantity === "string") {
          if (actionOrQuantity === "increase") {
            item.quantity += 1;
          } else if (actionOrQuantity === "decrease" && item.quantity > 0) {
            item.quantity -= 1;
          }
        } else {
          item.quantity = actionOrQuantity;
        }
      }
      return item;
    });
    setCheckedItems(updatedItems);
  };

  return (
    <section className="">
      <Link href="/construction" className="mt-2 mb-4">
        <img
          class="inline dark:hidden"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-3-svg1.svg"
          alt="back"
        />
        <img
          class="inline dark:block hidden"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/checkouts-3-svg1dark.svg"
          alt="back"
        />
        <span class="cursor-pointer text-gray-500  dark:text-white font-normal text-base  dark:hover:text-white">
          Back
        </span>
      </Link>
      <div class="lg:container lg:mx-auto grid grid-cols-9 lg:grid-cols-12">
        <div class="col-span-9 lg:col-span-8 xl:col-span-9 bg-white dark:bg-gray-900 h-[160vh]  relative lg:px-10 p-6 lg:py-12">
          <h3 class="font-semibold text-gray-800 dark:text-gray-50 text-4xl mt-4">
            Concrete Makers
          </h3>

          <div class="mt-5 lg:mt-20">
            <h3 class=" text-gray-800 dark:text-gray-50 font-medium text-xl">
              Select Services
            </h3>

            <div class="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
              <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                {/* //item start */}
                <div
                  role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <label
                    htmlFor="vertical-list-vue"
                    class="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div class="grid mr-3 place-items-center">
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="vertical-list-vue"
                        >
                          <input
                            id="vertical-list-vue"
                            type="checkbox"
                            data-price="600.00"
                            onChange={handleCheckboxChange}
                            value="Solling & PCC"
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                          />
                          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                     Solling & PCC ₹ 600/Column (Depending on Column pit)
                    </p>
                  </label>
                </div>
                {/* //item end */}
                  {/* //item start */}
                  <div
                  role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <label
                    htmlFor="vertical-list-vue"
                    class="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div class="grid mr-3 place-items-center">
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="vertical-list-vue"
                        >
                          <input
                            id="vertical-list-vue"
                            type="checkbox"
                            data-price="600.00"
                            onChange={handleCheckboxChange}
                            value="Concrete Filling"
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                          />
                          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                     Concrete Filling ₹ 600/brass (Depending on brass or sqft)
                    </p>
                  </label>
                </div>
                {/* //item end */}

                     {/* //item start */}
                     <div
                  role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <label
                    htmlFor="vertical-list-vue"
                    class="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div class="grid mr-3 place-items-center">
                      <div class="inline-flex items-center">
                        <label
                          class="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor="vertical-list-vue"
                        >
                          <input
                            id="vertical-list-vue"
                            type="checkbox"
                            data-price="1400.00"
                            onChange={handleCheckboxChange}
                            value="Bed Concrete"
                            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                          />
                          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      Bed Concrete ₹ 1400/Brass (Depending on Brass)
                    </p>
                  </label>
                </div>
                {/* //item end */}

                <label htmlFor="" className="text-gray-800 mt-4">
                  Problem Description
                </label>
                <div className="w-full outline-none">
                  <Textarea label="Message" className="" />
                </div>
              </nav>
            </div>
          </div>

          <div class="mt-7 lg:mt-20">
            <p class=" text-gray-600 font-medium text-xl dark:text-white mb-3">
              Your details
            </p>

            <form class="mt-8" action="" autocomplete="off">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <input
                  aria-label="yourName"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="yourName"
                  id="YourName"
                  placeholder="Your name"
                />
                <input
                  aria-label="emailAddress"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
                <input
                  aria-label="phoneNumber"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                />

                <input
                  aria-label="country"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                />
                <input
                  aria-label="state"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="state"
                  id="phoneNumber"
                  placeholder="State"
                />
                <input
                  aria-label="District"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  id="District"
                  placeholder=" District"
                />
                <input
                  aria-label="Tal"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  id="Tal"
                  placeholder="Tal"
                />
                <input
                  aria-label="Area"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  id="Area"
                  placeholder="Area"
                />
                <input
                  aria-label="Pincode"
                  class="border-b-2 items-center p-4 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  id="Pincode"
                  placeholder="Phone Pincode"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="relative col-span-9 lg:col-span-4 xl:col-span-3 bg-gray-100 dark:bg-gray-800 lg:h-auto xl:h-screen px-8 py-14 xl:px-12 xl:py-20">
          <div>
            <div class=" text-center ">
              <h3 class="text-gray-800 dark:text-gray-50 font-semibold text-2xl mt-[-2rem] text-center ">
                Services
              </h3>
            </div>

            <div class="mt-2 text-gray-800 space-y-60 dark:text-gray-50 text-lg font-normal w-[18rem] ml-[-2rem]">
              <DisplayCheckedItems
                checkedItems={checkedItems}
                updateQuantity={updateQuantity}
              />
              <h3 class="text-right pr-4 md:pr-5 lg:pr-4"></h3>
              <div className="mt-4">
                <p className="text-sm text-slate-300">(Include tax.)</p>
                <h2 className="text-xl font-bold mb-2">
                  Total Price: ₹ {totalPrice.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href=""
              class=" bg-black hover:bg-gray-800 dark:bg-gray-200 rounded-md dark:hover:bg-gray-300 dark:text-gray-900 text-white p-3 text-lg  w-full md:w-auto"
            >
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cm;
