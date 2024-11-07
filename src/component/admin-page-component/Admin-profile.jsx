import { useState, useEffect } from "react";
import { Button } from "../general-components/button";
import { handler } from "tailwindcss-animate";

export default function AdminProfile() {
  const [nameInput, setNameInput] = useState("Thompson P.");
  const [usernameInput, setUsernameInput] = useState("thompson");
  const [emailInput, setEmailInput] = useState("thompson.p@gmail.com");
  const [bioInput, setBioInput] = useState(
    "I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes"
  );
  const handleName = (e) => {
    setNameInput(e.target.value);
  };
  const handleUsername = (e) => {
    setUsernameInput(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailInput(e.target.value);
  };
  const handleBio = (e) => {
    setBioInput(e.target.value);
  };

  return (
    <div className="body w-full bg-[#F9F8F6] pb-20">
      <div className="icon-and-save flex flex-row justify-between px-14 py-6">
        <h1 className="font-semibold text-2xl text-[#26231E]">Profile</h1>
        <Button
          buttonText="Save"
          width="w-32"
          textColor="text-white"
          bgColor="bg-black"
          borderColor="border-black"
        />
      </div>

      <div className="admin-profile flex flex-col gap-10 px-14 pb-32">
        <div className="edit-picture flex flex-row gap-7 justify-start items-center">
          <img
            className="object-cover w-28 h-28 rounded-full"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt=""
          />
          <Button
            buttonText="Upload profile picture"
            width="w-64"
            textColor="text-[#26231E]"
            bgColor="bg-white"
            borderColor="border-[#75716B]"
          />
        </div>

        <hr />

        <div className="form-body">
          <form action="post" className="flex flex-col gap-7">
            <div className="input-name flex flex-col gap-1">
              <label
                htmlFor="name"
                className="font-normal text-base text-[#75716B]">
                Name
              </label>
              <input
                name="name"
                type="text"
                onChange={handleName}
                value={nameInput}
                className="w-5/12 p-3 rounded-lg border border-[#DAD6D1]"
              />
            </div>

            <div className="input-username flex flex-col gap-1">
              <label
                htmlFor="username"
                className="font-normal text-base text-[#75716B]">
                Username
              </label>
              <input
                onChange={handleUsername}
                value={usernameInput}
                name="username"
                type="text"
                className="w-5/12 p-3 rounded-lg border border-[#DAD6D1]"
              />
            </div>

            <div className="input-email flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-normal text-base text-[#75716B]">
                Email
              </label>
              <input
                onChange={handleEmail}
                value={emailInput}
                name="email"
                type="email"
                className="w-5/12 p-3 rounded-lg border border-[#DAD6D1]"
              />
            </div>

            <div className="input-bio flex flex-col gap-1">
              <label
                htmlFor="bio"
                className="font-normal text-base text-[#75716B]">
                Bio (max 120 letters)
              </label>
              <textarea
                onChange={handleBio}
                value={bioInput}
                name="bio"
                id="bio"
                className="w-full h-36 p-3 rounded-lg border border-[#DAD6D1]"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
