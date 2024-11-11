import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import AdminProfile from "@/component/admin-page-component/Admin-profile";
import CategoryMenagement from "@/component/admin-page-component/Category-management";
import ArticleMenagement from "@/component/admin-page-component/Article-management";
import Notification from "@/component/admin-page-component/Notification";
import ResetPassword from "@/component/admin-page-component/Reset-password";
import { useState } from "react";

/**
 * todo-------------------------------------------------------
 * แก้ sidebar 90% รอเติมปุ่ม
 * หน้า blog menagement 10% ดึงข้อมูล + map + ทำแถบ search
 * หน้า catelog menagement 40% เพิ่มฟังก์ชั่นให้ปุ่มเพิ่ม แก้ ลบ
 * เพิ่มหน้า Notification
 * เพิ่มหน้า Reset Password
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
        {/* <ArticleMenagement /> */}
        {/* <Notification /> */}
        {/* <ResetPassword /> */}
      </div>
    </div>
  );
}
