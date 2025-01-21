import { UserIcon, RefreshIcon } from "../icon/IconCollection";
import { useNavigate } from "react-router-dom";

export function UserHorizontalbar() {
  const navigate = useNavigate();
  const profileRedirect = () => {
    navigate(`/user/profile`);
  };
  const resetPasswordRedirect = () => {
    navigate(`/user/resetpassword`);
  };
  return (
    <>
      <div className="horizonatal-bar flex flex-row bg-[#F9F8F6]">
        <button
          onClick={profileRedirect}
          className="menu-item flex flex-row gap-3 items-center px-6 py-4 w-2/6 h-16 font-medium text-base text-[#75716B] hover:text-[#43403B]">
          <UserIcon />
          Profile
        </button>
        <button
          onClick={resetPasswordRedirect}
          className="menu-item flex flex-row gap-3 justify-center items-center px-6 py-4 w-4/6 h-16 font-medium text-base text-[#75716B] hover:text-[#43403B]">
          <RefreshIcon />
          Reset Password
        </button>
      </div>
    </>
  );
}

export function UserSidebar() {
  const navigate = useNavigate();
  const profileRedirect = () => {
    navigate(`/user/profile`);
  };
  const resetPasswordRedirect = () => {
    navigate(`/user/resetpassword`);
  };
  return (
    <>
      <div className="horizonatal-bar flex flex-col">
        <button
          onClick={profileRedirect}
          className="menu-item flex flex-row gap-3 w-48 py-3 px-4 items-center text-start">
          <UserIcon />
          <span>Profile</span>
        </button>
        <button
          onClick={resetPasswordRedirect}
          className="menu-item flex flex-row gap-3 w-48 py-3 px-4 items-center text-start">
          <RefreshIcon />
          <span>Reset Password</span>
        </button>
      </div>
    </>
  );
}
