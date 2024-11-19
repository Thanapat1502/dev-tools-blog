import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import ResetPassword from "@/component/admin-page-component/Reset-password";
export default function AdminResetPassword() {
  // //------toggle button-----------------------------

  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <div className="main w-full">
        <ResetPassword />
      </div>
    </div>
  );
}
