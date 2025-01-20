import Navebar from "../landinpage-component/Navebar";
import { UserHorizontalbar } from "./UserHorizontalbar";
import { Button } from "../general-components/button";
import { UserAlert } from "./UserAlert";

export default function UserProfileSm() {
  return (
    <>
      <Navebar />
      <UserHorizontalbar />
      <div className="main-container relative ">
        <div className="profile-header flex flex-row gap-3 justify-center items-center bg-[#F9F8F6]">
          <div className="profile-element flex flex-row justify-center items-center">
            <img
              src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBpqgiLsh8iZREh2UsP5iLS3j3nr8i0U0a3jUb1Spi4ltheo6O.webp"
              alt="profile-avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h4 className="profile-name font-semibold text-[#75716B] py-6 px-4">
              Modeng ja
            </h4>
          </div>
          <h4 className="font-semibold text-xl"> Profile </h4>
        </div>
        <div className="profile-management-container bg-[#EFEEEB] ">
          <form className="mx-4">
            <div className="for-image border-b flex flex-col justify-center items-center gap-6 pt-6 ">
              <img
                src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBpqgiLsh8iZREh2UsP5iLS3j3nr8i0U0a3jUb1Spi4ltheo6O.webp"
                alt="profile-avatar"
                className="w-32 h-32 rounded-full object-cover"
              />
              <Button
                buttonText="Uploadprofile picture"
                bgColor="bg-white"
                textColor="text-balck"
                borderColor="border-black"
              />
            </div>
            <div className="for-input flex flex-col gap-6 pb-10 ">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                />
              </div>

              <div className="username">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                />
              </div>

              <div className="email">
                <label htmlFor="email" className="text-[#75716B] ">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={"moodeng.cute@gmail.com"}
                  disabled
                  className="w-full h-12 rounded-lg bg-[#EFEEEB] py-3 pl-4 pr-3 text-[#75716B]"
                />
              </div>
              <Button
                buttonText="Save"
                bgColor="bg-black"
                textColor="text-white"
                width="w-32"
              />
            </div>
          </form>
        </div>
        {/* <UserAlert /> */}
      </div>
    </>
  );
}
