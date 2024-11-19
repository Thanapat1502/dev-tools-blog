import { useNavigate } from "react-router-dom";
import {
  NotebookIcon,
  UserIcon,
  FileIcon,
  BellIcon,
  NavOutIcon,
  LogOutIcon,
} from "../icon/IconCollection";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const toggleArticleMenagement = () => {
    console.log("AM can click");
    navigate("/admin/article-menage");
  };
  const toggleCategoryMenagement = () => {
    console.log("CM can click");
    navigate("/admin/category-menage");
  };
  const toggleProfile = () => {
    console.log("AP can click");
    navigate("/admin/profile");
  };
  const toggleNotification = () => {
    navigate("/admin/notification");
  };
  const toggleResetPassword = () => {
    navigate("/admin/reset-password");
  };
  //-
  return (
    <div className="side-section-container w-72 h-screen bg-[#EFEEEB] flex flex-col justify-between">
      <div className="between-container">
        <div className="sidbar-header flex flex-col justify-center w-full h-52 py-16 px-6">
          <h1 className="web-logo font-semibold text-6xl">
            hh<span className="text-green-500">.</span>
          </h1>
          <h4 className="font-semibold text-xl text-[#F2B68C]">Admin panel</h4>
        </div>

        <div className="sidebar bg-[#EFEEEB]">
          <button
            onClick={toggleArticleMenagement}
            className="menu-item flex flex-row gap-3 items-center px-6 py-4 w-72 h-16 font-medium text-base text-[#75716B] hover:bg-[#DAD6D1]">
            <NotebookIcon />
            Article management
          </button>
          <button
            onClick={toggleCategoryMenagement}
            className="menu-item flex flex-row gap-3 items-center px-6 py-4 w-72 h-16 font-medium text-base text-[#75716B] hover:bg-[#DAD6D1]">
            <FileIcon />
            Category management
          </button>
          <button
            onClick={toggleProfile}
            className="menu-item flex flex-row gap-3 items-center px-6 py-4 w-72 h-16 font-medium text-base text-[#75716B] hover:bg-[#DAD6D1]">
            <UserIcon /> Profile
          </button>
          <button
            onClick={toggleNotification}
            className="menu-item flex flex-row gap-3 items-center px-6 py-4 w-72 h-16 font-medium text-base text-[#75716B] hover:bg-[#DAD6D1]">
            <BellIcon />
            Notification
          </button>
          <button
            onClick={toggleResetPassword}
            className="menu-item flex flex-row gap-3 items-center px-6 py-4 w-72 h-16 font-medium text-base text-[#75716B] hover:bg-[#DAD6D1]">
            <BellIcon />
            Reset password
          </button>

          {/* <Sidebar>
            <Menu>
              <MenuItem>
                <div className="menu-item flex flex-row gap-3 font-medium text-base text-[#75716B]">
                  <NotebookIcon />
                  Article management
                </div>
              </MenuItem>
              <MenuItem>
                <div className="menu-item flex flex-row gap-3 px-6 py-5 w-72 h-16 font-medium text-base text-[#75716B]">
                  <FileIcon prop="แก้ด้วย" />
                  Category management
                </div>
              </MenuItem>
              <MenuItem>
                <div className="menu-item flex flex-row gap-3 px-6 py-5 w-72 h-16 font-medium text-base text-[#75716B]">
                  <UserIcon /> Profile
                </div>
              </MenuItem>
              <MenuItem>
                <div className="menu-item flex flex-row gap-3 px-6 py-5 w-72 h-16 font-medium text-base text-[#75716B]">
                  <BellIcon />
                  Notification
                </div>
              </MenuItem>
              <MenuItem>
                <div className="menu-item flex flex-row gap-3 px-6 py-5 w-72 h-16 font-medium text-base text-[#75716B]">
                  Reset password
                </div>
              </MenuItem>
            </Menu>
          </Sidebar> */}
        </div>
      </div>

      <div className="footer-button mb-4">
        <div className="homepage-navigetion">
          <button className=" flex items-center gap-3 h-16 w-full text-start px-6 py-4 font-medium text-base text-[#75716B]">
            <NavOutIcon />
            <span>hh.wbsite</span>
          </button>
        </div>
        <hr />
        <div className="log-out flex">
          <button className=" flex items-center gap-3 h-16 w-full text-start px-6 py-4 font-medium text-base text-[#75716B]">
            <LogOutIcon />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
