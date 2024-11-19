import AdminSidebar from "@/component/admin-page-component/AdminSidbar";
import ArticleMenagement from "@/component/admin-page-component/Article-management";
export default function AdminArticleMenagement() {
  return (
    <div className="body flex flex-row">
      <AdminSidebar />
      <div className="main w-full">
        <ArticleMenagement />
      </div>
    </div>
  );
}
