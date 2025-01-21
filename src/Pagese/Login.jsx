import Navebar from "@/component/landinpage-component/Navebar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();
  const navSignIn = () => {
    navigate(`/register`);
  };
  const handleLogin = () => {
    const isLoginComplete = login(email, password);
    if (isLoginComplete === true) {
      navigate("/");
    } else {
      alert("Your email or password is incorrec.");
    }
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Navebar />
      <main>
        <div className="Login-body flex flex-col justify-center items-center gap-6 rounded-2xl bg-[#EFEEEB] py-10 px-4 mx-3 h-5/6 mt-10 mb-20">
          <h1 className="font-semibold text-4xl text-[#26231E]">Log in</h1>
          <form
            onSubmit={handleLogin}
            className=" flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-medium text-base text-[#75716B]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleEmailInput}
                className="border py-3 pr-3 pl-4 w-80 h-12 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="font-medium text-base text-[#75716B]">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handlePasswordInput}
                className="border py-3 pr-3 pl-4 w-80 h-12 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="p-2 pr-10 pl-10  h-12 w-36 rounded-full bg-black text-white font-medium text-base">
              Login
            </button>
          </form>

          <div className="redirection flex gap-3">
            <p className="font-medium text-base text-[#75716B]">
              Don’t have any account?
            </p>
            <button
              onClick={navSignIn}
              className="font-medium text-base underline text-[#26231E]">
              Sign up
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
