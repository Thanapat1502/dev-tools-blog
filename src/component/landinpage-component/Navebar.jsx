import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

function HambergerMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={21}
        className="relative"
      />
      {isOpen ? (
        <div className="absolute h-56 w-full bg-[#F9F8F6] border-t shadow-md left-0 flex flex-col justify-center items-center gap-6">
          <LoginButton width="w-80" />
          <SignUpButton width="w-80" />
        </div>
      ) : null}
    </>
  );
}

function SignUpButton(props) {
  return (
    <button
      className={`border ${props.width} p-2 pr-10 pl-10  h-12 rounded-full bg-black text-white font-medium text-base`}>
      Sign up
    </button>
  );
}
function LoginButton(props) {
  return (
    <button
      className={`border ${props.width} p-2 pr-10 pl-10 h-12 rounded-full border-black bg-white font-medium text-base`}>
      Login
    </button>
  );
}
function Navebar() {
  return (
    <nav className="flex justify-between border-b pt-3 pb-3">
      <a className="logo text-2xl font-bold ml-6">
        hh<span className="text-green-500">.</span>
      </a>
      <div className="hamberger-container lg:hidden">
        <HambergerMenu />
      </div>
      <div className="login-section hidden lg:flex lg:gap-2">
        <LoginButton width="w-36" />
        <SignUpButton width="w-36" />
      </div>
    </nav>
  );
}

export default Navebar;
