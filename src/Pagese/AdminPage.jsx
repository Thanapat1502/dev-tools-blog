import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import AdminProfile from "@/component/admin-page-component/Admin-profile";
import CategoryMenagement from "@/component/admin-page-component/Category-management";
//side bar จาก https://www.npmjs.com/package/react-pro-sidebar
/**
 * todo
 * แก้ sidebar 50%
 * เพิ่มหน้า blog menagement
 * เพิ่มหน้า catelog menagement
 */
export default function AdminPage() {
  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      {/* <AdminProfile /> */}
      <CategoryMenagement />
    </div>
  );
}
