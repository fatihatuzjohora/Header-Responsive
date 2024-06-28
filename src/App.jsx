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

      <div className="w-full fixed top-0 left-0 z-[900] duration-300  py-3">
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
                {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
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

                  {/* <Typography color="gray" className="mb-8 pr-4 font-normal">
                    Material Tailwind features multiple React and HTML
                    components, all written with Tailwind CSS classes and
                    Material Design guidelines.
                  </Typography> */}
                  {/* <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                      Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                  </div> */}
                </Drawer>
              </React.Fragment>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
