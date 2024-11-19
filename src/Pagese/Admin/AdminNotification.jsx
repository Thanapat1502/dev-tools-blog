import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import Notification from "@/component/admin-page-component/Notification";

export default function AdminNotification() {
  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <div className="main w-full">
        <Notification />
      </div>
    </div>
  );
}
