import Navebar from "../landinpage-component/Navebar";
import { UserHorizontalbar, UserSidebar } from "./UserHorizontalbar";
import { Button } from "../general-components/button";

export function UserResetPasswordSM() {
  return (
    <>
      <Navebar />
      <UserHorizontalbar />

      <div className="main-container relative h-screen bg-[#F9F8F6]">
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
          <h4 className="font-semibold text-xl"> Reset password </h4>
        </div>

        <div className="profile-management-container bg-[#EFEEEB]">
          <form className="mx-4">
            <div className="for-input flex flex-col gap-6 pb-10 pt-6">
              <div className="current-password">
                <label htmlFor="current-password">Current password</label>
                <input
                  type="password"
                  name="current-password"
                  placeholder="Current password"
                  className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                />
              </div>

              <div className="new-password">
                <label htmlFor="new-password">New password</label>
                <input
                  type="password"
                  name="new-password"
                  placeholder="New password"
                  className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                />
              </div>

              <div className="confirm-password">
                <label htmlFor="confirm-password">Confirm new password</label>
                <input
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm new password"
                  className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                />
              </div>
              <Button
                buttonText="Reset password"
                bgColor="bg-black"
                textColor="text-white"
                width="w-44"
              />
            </div>
          </form>
        </div>
        {/* <UserAlert /> */}
      </div>
    </>
  );
}

//FIXME fix profile header position
export function UserResetPasswordLG() {
  return (
    <>
      <Navebar />
      <div className="flex flex-col px-28 relative">
        <div className="profile-header flex flex-row gap-1 items-center">
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
          <h4 className="font-semibold text-xl">| Profile </h4>
        </div>

        <div className="main-container relative flex justify-center w-full">
          <UserSidebar />
          <div className="profile-management-container bg-[#EFEEEB] w-2/5 rounded-2xl">
            <form className="mx-4">
              <div className="for-input flex flex-col gap-6 pb-10 pt-6">
                <div className="current-password">
                  <label htmlFor="current-password">Current password</label>
                  <input
                    type="password"
                    name="current-password"
                    placeholder="Current password"
                    className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                  />
                </div>

                <div className="new-password">
                  <label htmlFor="new-password">New password</label>
                  <input
                    type="password"
                    name="new-password"
                    placeholder="New password"
                    className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                  />
                </div>

                <div className="confirm-password">
                  <label htmlFor="confirm-password">Confirm new password</label>
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder="Confirm new password"
                    className="w-full h-12 rounded-lg border py-3 pl-4 pr-3"
                  />
                </div>
                <Button
                  buttonText="Reset password"
                  bgColor="bg-black"
                  textColor="text-white"
                  width="w-44"
                />
              </div>
            </form>
          </div>
          <div className="hidden"></div>
        </div>
      </div>
    </>
  );
}
