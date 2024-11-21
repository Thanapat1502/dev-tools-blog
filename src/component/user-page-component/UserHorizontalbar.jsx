import { UserIcon, RefreshIcon } from "../icon/IconCollection";

export default function UserHorizontalbar() {
  return (
    <>
      <div className="horizonatal-bar flex flex-row bg-[#F9F8F6] lg:flex lg:flex-col">
        <button className="menu-item flex flex-row gap-3 items-center px-6 py-4 w-2/6 h-16 font-medium text-base text-[#75716B] hover:text-[#43403B]">
          <UserIcon />
          Profile
        </button>
        <button className="menu-item flex flex-row gap-3 justify-center items-center px-6 py-4 w-4/6 h-16 font-medium text-base text-[#75716B] hover:text-[#43403B]">
          <RefreshIcon />
          Reset Password
        </button>
      </div>
    </>
  );
}
