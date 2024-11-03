import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import SignIn from "@/Pagese/SignIn";

function HambergerMenu({ navLogin, navSignIn }) {
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
          <LoginButton width="w-80" navLogin={navLogin} />
          <SignUpButton width="w-80" navSignIn={navSignIn} />
        </div>
      ) : null}
    </>
  );
}

function SignUpButton(props) {
  const navSignIn = props.navSignIn;
  return (
    <button
      onClick={navSignIn}
      className={`border ${props.width} p-2 pr-10 pl-10  h-12 rounded-full bg-black text-white font-medium text-base`}>
      Sign up
    </button>
  );
}

function LoginButton(props) {
  const navLogin = props.navLogin;
  return (
    <button
      onClick={navLogin}
      className={`border ${props.width} p-2 pr-10 pl-10 h-12 rounded-full border-black bg-white font-medium text-base`}>
      Login
    </button>
  );
}
function Navebar() {
  const navigate = useNavigate();

  const navSignIn = () => {
    navigate(`/register`);
  };

  const navLogin = () => {
    navigate(`/login`);
  };

  return (
    <nav className="flex justify-between border-b pt-3 pb-3">
      <a className="logo text-2xl font-bold ml-6">
        hh<span className="text-green-500">.</span>
      </a>
      <div className="hamberger-container lg:hidden">
        <HambergerMenu navLogin={navLogin} navSignIn={navSignIn} />
      </div>
      <div className="login-section hidden lg:flex lg:gap-2">
        <LoginButton width="w-36" navLogin={navLogin} />
        <SignUpButton width="w-36" navSignIn={navSignIn} />
      </div>
    </nav>
  );
}

export default Navebar;
