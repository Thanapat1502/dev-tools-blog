// import Hamburger from "hamburger-react";
// import { useState } from "react";

function Navebar() {
  // const [isOpen, setOpen] = useState(false);
  return (
    <nav className="flex justify-between border-b pt-3 pb-3">
      <a className="logo text-2xl font-bold ml-6">
        hh<span className="text-green-500">.</span>
      </a>
      <div className="login-section hidden lg:flex lg:gap-2 ">
        {/* <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          className="block lg:hidden"
        /> */}
        <div className="button-colleciton hidden lg:block">
          <button className="border p-2 pr-10 pl-10 rounded-full border-black font-medium text-base">
            Login
          </button>
          <button className="border p-2 pr-10 pl-10 rounded-full bg-black text-white font-medium text-base">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navebar;
