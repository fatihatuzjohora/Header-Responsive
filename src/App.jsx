import "./App.css";
import { IoMdSearch } from "react-icons/io";

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

function App() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const link = (
    <>
      <li className=" font-semibold text-slate-400 text-lg">
        <a>Home</a>
      </li>
      <li className=" font-semibold text-slate-400 text-lg">
        <a>Service</a>
      </li>
      <li className=" font-semibold text-slate-400 text-lg">
        <a>Guides</a>
      </li>
      <li className=" font-semibold text-slate-400 text-lg">
        <a>Become a Service provider</a>
      </li>
    </>
  );

  return (
    <div>
      {/* Header  */}

      <div>
        {/* <div className="w-full fixed top-0 left-0 z-[900] duration-300  py-3">
        <div className="navbar max-w-7xl mx-auto px-4 ">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Server</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="bg-black rounded-3xl">
            <input
              className="bg-black font-semibold p-2 rounded-3xl ml-2 px-2 py-3 outline-none pl-3 text-slate-600"
              type="text"
              placeholder="Search here..."
            />
            <IoMdSearch className="text-slate-400 text-xl mr-5" />
          </div>
          <div className="navbar-end hidden lg:flex gap-3">
            <a className="btn font-semibold text-slate-400 text-lg rounded-3xl">
              Log in
            </a>
            <a className="btn font-semibold text-lg text-white rounded-3xl bg-[#5F4BDB] hover:bg-blue-600">
              Sign Up
            </a>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-[300px]  p-2"
            >
              <React.Fragment>
               
                <Drawer open={open} onClose={closeDrawer} className="p-4">
                  <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      {link}
                    </Typography>

                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform mb-8">
                      <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawer}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </IconButton>
                    </span>
                  </div>

                </Drawer>
              </React.Fragment>
            </ul>
          </div>
        </div>
      </div> */}
      </div>

      {/* Service 1 */}
      <div className=" w-[600px] mx-auto bg-slate-200 p-4 rounded-md shadow">
        <div>
          {/* 1st step   */}
          <div>
            <ul className="w-full border border-gray-300 rounded-xl menu menu-horizontal flex justify-between ">
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
              <div className="flex">
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </a>
                </li>
              </div>
            </ul>
          </div>
          {/* 2nd step  */}
          <div className="flex gap-3 items-center mt-8">
            <div>
              <img
                className="rounded-full w-[100px]"
                src="https://i.ibb.co.com/cxXCcxH/unnamed.jpg"
                alt=""
              />
            </div>

            <div className="text-start">
              <h1 className="font-bold mb-3 ">smmservice24.com</h1>
              <div className="flex gap-4">
                <button className="btn border-gray-300 ">সাপোর্ট</button>
                <button className="btn border-gray-300 ">তথ্যাদি </button>
                <button className="btn border-gray-300 ">বিস্তারিত</button>
              </div>
            </div>
          </div>

          {/* 3rd step  */}
          <div className="mt-5">
            <ul className="w-full bg-blue-800 text-white font-semibold rounded-md  text-center p-2">
              মোবাইল ব্যাংকিং
            </ul>
          </div>

          {/* 4th step  */}

          <div className="mt-8">
            <div className="flex gap-4">
              <button className="btn border-gray-300 w-[100px] ">
                <img
                  className=""
                  src="https://i.ibb.co.com/db7dqZ8/download-removebg-preview.png"
                  alt="Bkash"
                />
              </button>
              <button className="btn border-gray-300 w-[100px] ">
                <img
                  className=""
                  src="https://i.ibb.co.com/xgpF3YS/download-4-removebg-preview-1.png"
                  alt="Nagad"
                />
              </button>
              <button className="btn border-gray-300 w-[100px] ">
                <img
                  className=""
                  src="https://i.ibb.co.com/fC8KfDP/download-removebg-preview-1.png"
                  alt="Rocket"
                />
              </button>
              <button className="btn border-gray-300 w-[100px] ">
                <img
                  className=""
                  src="https://i.ibb.co.com/Jr1r5SF/download-2-removebg-preview.png"
                  alt="Upai"
                />
              </button>

              <button className="btn border-gray-300 w-[100px] ">
                <img
                  className=""
                  src="https://i.ibb.co.com/jfLqp5Y/download-3-removebg-preview.png"
                  alt="callfin"
                />
              </button>
            </div>
          </div>
          {/* 5th step  */}
          <div className="mt-5">
            <ul className="w-full bg-blue-300 text-blue-800 font-bold rounded-md  text-center p-2">
              Pay 0000.00 BDT
            </ul>
          </div>
        </div>
      </div>

      {/* Service 2*/}

      <section>
        <div className=" mt-10 w-[600px] mx-auto  p-4 rounded-md border border-blue-600">
          {/* 1 step  */}
          <div>
            <ul className="w-full border border-gray-300 rounded-xl menu menu-horizontal flex justify-between ">
              <li>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
              <div className="flex">
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </a>
                </li>
              </div>
            </ul>
          </div>

          {/* 2 step  */}

          <div className="mt-5 flex justify-center items-center">
            <img
              className=" w-[150px] "
              src="https://i.ibb.co.com/xgpF3YS/download-4-removebg-preview-1.png"
              alt="NAGAD"
            />
          </div>

          {/* 3 step  */}

          <div className="mt-8">
            <div className="flex gap-5">
              <div className="flex border  w-[70%] border-gray-300 p-2 rounded-md gap-3 items-center ">
                <div>
                  <img
                    className="rounded-full w-[50px]"
                    src="https://i.ibb.co.com/cxXCcxH/unnamed.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start">
                  <h1 className="font-bold">smmservice24.com</h1>
                  <h1 className=" font-semibold ">
                  ইনভয়েস আইডি :
 
                  </h1>
                  <h1 className=" font-semibold ">
                    000000000000000
                  </h1>
                </div>
              </div>

              <div className="">
                <h1 className=" p-4 border rounded-md border-gray-300 ">00</h1>
              </div>
            </div>
          </div>

          {/* 4step  */}
          <div className="mt-5">
  <div className="w-full bg-red-600 text-white rounded-md p-2 text-start">
    <h1 className="text-center p-2 font-bold">ট্রানজেকশন আইডি দিন</h1>
    <input
      className="w-full p-2 rounded-md text-gray-400"
      type="text"
      placeholder="ট্রানজেকশন আইডি দিন"
    />
    {/* Apply list-disc and list-inside to the ul */}
    <ul className="list-disc list-inside text-md mt-3">
      <li className="border-b border-b-orange-400 text-sm py-3">
        *167# ডায়াল করে আপনার NAGAD মোবাইল মেনুতে যান অথবা NAGAD
        অ্যাপে যান ৷
      </li>
      <li className="border-b border-b-orange-400 text-sm py-3">
        <span className="text-orange-400 font-bold">"Send Money" </span>ক্লিক করুন ৷
      </li>
      <li className="border-b border-b-orange-400 text-sm py-3">
        প্রাপক নম্বর হিসেবে ওই নম্বর লিখুন <span className="text-orange-400 font-bold">00000000000</span>
      </li>
      <li className="border-b border-b-orange-400 text-sm py-3">
        টাকার পরিমান <span className="text-orange-400 font-bold">0000</span>
      </li>
      <li className="border-b border-b-orange-400 text-sm py-3">
        নিশ্চিত করতে এখন আপনার NAGAD মোবাইল মেনু পিন লিখুন ৷
      </li>
      <li className="border-b border-b-orange-400 text-sm py-3">
        সবকিছু ঠিক থাকলে আপনি NAGAD থেকে একটা নিশ্চিতকরণ বার্তা পাবেন ৷
      </li>
      <li className="border-b border-b-orange-400 text-sm py-3">
        এখন উপরের বক্সে আপনার <span className="text-orange-400 font-bold">Transaction ID</span> দিন এবং নিচের <span className="text-orange-400 font-bold"> VERIFY </span>  
        বাটনে ক্লিক করুন ৷
      </li>
    </ul>
  </div>
</div>


          {/* step  */}

          <div className="mt-5">
            <ul className="w-full bg-red-600 text-white font-semibold rounded-md btn text-center p-2">
              VERIFY
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
