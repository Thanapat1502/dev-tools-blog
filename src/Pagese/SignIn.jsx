import Navebar from "@/component/landinpage-component/Navebar";
export default function SignIn() {
  return (
    <>
      <Navebar />
      <main>
        <div className="SignUp-body flex flex-col justify-center items-center gap-6 rounded-2xl bg-[#EFEEEB] py-10 px-4 mx-3 h-5/6 mt-10 mb-20">
          <h1 className="font-semibold text-4xl text-[#26231E]">Sign up</h1>
          <form
            action="post"
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
            <a
              href="*"
              className="font-medium text-base underline text-[#26231E]">
              Log in
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
