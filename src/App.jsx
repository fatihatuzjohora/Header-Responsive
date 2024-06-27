import "./App.css";
import { IoMdSearch } from "react-icons/io";

function App() {
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
    <>
      <div className="navbar ">
        <div className="navbar-start">

          <a className="btn btn-ghost text-xl">Server</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="bg-black border rounded-3xl">
          <input
            className="bg-black font-semibold p-2 rounded-3xl ml-2"
            type="text"
            placeholder="Search here..."
          />
          <IoMdSearch className="text-slate-400 text-xl mr-5" />
        </div>
        <div className="navbar-end hidden lg:flex gap-3">
          <a className="btn font-semibold text-slate-400 text-lg rounded-3xl">
            Log in
          </a>
          <a className="btn font-semibold text-lg text-white rounded-3xl bg-blue-500">
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
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
      </div>
    </>
  );
}

export default App;
