import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import AdminProfile from "@/component/admin-page-component/Admin-profile";
import CategoryMenagement from "@/component/admin-page-component/Category-management";
import { useState } from "react";

/**
 * todo-------------------------------------------------------
 * แก้ sidebar 100%
 * เพิ่มหน้า blog menagement
 * เพิ่มหน้า catelog menagement 40% เพิ่มฟังก์ชั่นให้ปุ่มเพิ่ม แก้ ลบ
 * refactor เป็น fetch ข้อมูลจาก database
 */
//---------------------------------------

export default function AdminPage() {
  const [isArticleManagement, setIsArticleMenagement] = useState(true);
  const [isCategoryMenagement, setIsCategoryMenagement] = useState(false);
  const [isProfile, setIsprofile] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  //------toggle button-----------------------------
  const toggleArticleMenagement = () => {
    setIsArticleMenagement();
  };
  const toggleCategoryMenagement = () => {
    setIsCategoryMenagement();
  };
  const toggleProfile = () => {
    setIsprofile();
  };
  const toggleNotification = () => {
    setIsNotification();
  };
  const toggleResetPassword = () => {
    setIsResetPassword();
  };
  //----------------------------------------------
  return (
    <div className="body flex flex-row">
      <AdminSidebar
        toggleArticleMenagement={toggleArticleMenagement}
        toggleCategoryMenagement={toggleCategoryMenagement}
        toggleProfile={toggleProfile}
        toggleNotification={toggleNotification}
        toggleResetPassword={toggleResetPassword}
      />
      <div className="main w-full">
        <AdminProfile />
        {/* <CategoryMenagement /> */}
      </div>
    </div>
  );
}
