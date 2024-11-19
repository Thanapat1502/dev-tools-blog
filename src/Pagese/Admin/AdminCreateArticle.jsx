import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import { AdminCreate } from "@/component/admin-page-component/Admin-create";
export default function AdminCreateArticle() {
  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <div className="main w-full">
        <AdminCreate />
      </div>
    </div>
  );
}
