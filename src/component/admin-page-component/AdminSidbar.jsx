import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  NotebookIcon,
  UserIcon,
  FileIcon,
  BellIcon,
  NavOutIcon,
  LogOutIcon,
} from "../icon/IconCollection";

export default function AdminSidebar() {
  return (
    <div className="side-section-container w-72 bg-[#EFEEEB] flex flex-col justify-between">
      <div className="between-container">
        <div className="sidbar-header flex flex-col justify-center w-full h-52 py-16 px-6">
          <h1 className="web-logo font-semibold text-6xl">
            hh<span className="text-green-500">.</span>
          </h1>
          <h4 className="font-semibold text-xl text-[#F2B68C]">Admin panel</h4>
        </div>

        <div className="sidebar-body bg-[#EFEEEB]">
          <Sidebar>
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
          </Sidebar>
        </div>
      </div>

      <div className="footer-button mb-4">
        <div className="homepage-navigetion">
          <button className="flex gap-3 h-16 w-full text-start px-6 py-5 font-medium text-base text-[#75716B]">
            <NavOutIcon />
            <span>hh.wbsite</span>
          </button>
        </div>
        <hr />
        <div className="log-out flex">
          <button className="flex gap-3 h-16 w-full text-start px-6 py-5 font-medium text-base text-[#75716B]">
            <LogOutIcon />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// <Sidebar>
//   <Menu>
//     <SubMenu label="Charts">
//       <MenuItem> Pie charts </MenuItem>
//       <MenuItem> Line charts </MenuItem>
//     </SubMenu>
//     <MenuItem> Documentation </MenuItem>
//     <MenuItem> Calendar </MenuItem>
//   </Menu>
// </Sidebar>
