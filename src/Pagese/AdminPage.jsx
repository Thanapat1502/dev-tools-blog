import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import AdminProfile from "@/component/admin-page-component/Admin-profile";

export default function AdminPage() {
  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <AdminProfile />
    </div>
  );
}
