import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import CategoryMenagement from "@/component/admin-page-component/Category-management";
export default function AdminCategoryMenagement() {
  // //------toggle button-----------------------------

  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <div className="main w-full">
        <CategoryMenagement />
      </div>
    </div>
  );
}
