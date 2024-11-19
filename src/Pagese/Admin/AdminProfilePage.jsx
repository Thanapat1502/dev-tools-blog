import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import AdminProfile from "@/component/admin-page-component/Admin-profile";

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

export default function AdminProfilePage() {
  // //------toggle button-----------------------------

  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <div className="main w-full">
        <AdminProfile />
      </div>
    </div>
  );
}
