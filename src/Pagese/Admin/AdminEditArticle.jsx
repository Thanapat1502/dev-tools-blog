import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import { AdminEdit } from "@/component/admin-page-component/Admin-edit";
export default function AdminEditArticle() {
  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <div className="main w-full">
        <AdminEdit />
      </div>
    </div>
  );
}
