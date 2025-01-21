import Navebar from "@/component/landinpage-component/Navebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
  const navLogin = () => {
    navigate(`/login`);
  };
  //-----state declaration------
  const [fullNameInput, setFullNameInput] = useState("");
  const [userNameInput, setuserNameInput] = useState("");
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  //----Input Handler----------------------
  const hendleFullnameinput = (e) => {
    setFullNameInput(e.target.value);
  };
  const hendleUserNameinput = (e) => {
    setuserNameInput(e.target.value);
  };
  const hendleEmailinput = (e) => {
    setemailInput(e.target.value);
  };
  const hendlePasswordinput = (e) => {
    setpasswordInput(e.target.value);
  };

  //---Form handler--------
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: fullNameInput,
      userName: userNameInput,
      email: emailInput,
      password: passwordInput,
    });

    console.log(
      `${formData.fullName} | ${formData.userName} | ${formData.email} | ${formData.password}`
    );
  };

  return (
    <>
      <Navebar />
      <main>
        <div className="SignUp-body flex flex-col justify-center items-center gap-6 rounded-2xl bg-[#EFEEEB] py-10 px-4 mx-3 h-5/6 mt-10 mb-20">
          <h1 className="font-semibold text-4xl text-[#26231E]">Sign up</h1>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className="font-medium text-base text-[#75716B]">
                Name
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                onChange={hendleFullnameinput}
                className="border py-3 pr-3 pl-4 w-80 h-12 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="font-medium text-base text-[#75716B]">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={hendleUserNameinput}
                className="border py-3 pr-3 pl-4 w-80 h-12 rounded-lg"
              />
            </div>

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
                onChange={hendleEmailinput}
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
                placeholder="Password"
                onChange={hendlePasswordinput}
                className="border py-3 pr-3 pl-4 w-80 h-12 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="p-2 pr-10 pl-10  h-12 w-36 rounded-full bg-black text-white font-medium text-base">
              Submit
            </button>
          </form>

          <div className="redirection flex gap-3">
            <p className="font-medium text-base text-[#75716B]">
              Already have an account?
            </p>
            <button
              onClick={navLogin}
              className="font-medium text-base underline text-[#26231E]">
              Log in
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
