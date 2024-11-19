import { Button } from "../general-components/button";
import { EditIcon, TrashIcon } from "../icon/IconCollection";
import { SelectCategory, SelectStatus } from "./SelectButtons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ArticleMenagement() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [categories, setCategories] = useState([
    "Cat",
    "General",
    "Inspiration",
  ]); //ลบทีหลัง ตั้งเป็น []
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleCreate = () => {
    navigate("/admin/article-menage/create");
  };
  const handleEdit = (postId) => {
    navigate(`/admin/article-menage/edit/${postId}`);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://blog-post-project-api.vercel.app/posts?limit=999"
        );
        setPosts(response.data.posts);
        setFilteredPosts(response.data.posts);
        /** fetch เพื่อรับค่า category
         * // const respohhnseCategories = await axios.get("https://blog-post-project-api.vercel.app/posts");
         * // setCategories(responseCategories.data);
         *
         */
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []); //ใช้ fetch post

  useEffect(() => {
    let filtered = posts;

    if (searchKeyword) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          post.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
          post.content.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((post) =>
        post.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (selectedStatus) {
      filtered = filtered.filter((post) =>
        post.status.toLowerCase().includes(selectedStatus.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchKeyword, selectedCategory, selectedStatus, posts]); //สำหรับ fetch แบบ condition

  return (
    <div className="body w-full h-screen bg-[#F9F8F6] pb-20 px-16 ">
      <div className="category-header flex justify-between items-center py-6">
        <h3 className="font-semibold text-2xl text-[#26231E]">
          Article management
        </h3>
        <Button
          callBack={handleCreate}
          buttonText={"+ Create article"}
          width={"w-60"}
          bgColor={"bg-black"}
          textColor={"text-white"}
        />
      </div>

      <div className="main-container flex flex-col gap-4">
        {/**เพิ่ม search bar */}
        <div className="search-section flex flex-row justify-between">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-96 h-12 py-3 pr-3 pl-4 rounded-lg border border-[#DAD6D1]"
            />
          </div>
          <div className="select-section flex gap-4">
            <SelectStatus
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
            <SelectCategory
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Article title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array(9)
                .fill()
                .map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton className="h-6 w-[250px] bg-[#EFEEEB]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-[150px] bg-[#EFEEEB]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-[100px] bg-[#EFEEEB]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-6 w-[50px] bg-[#EFEEEB]" />
                    </TableCell>
                  </TableRow>
                ))
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.category}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex capitalize items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        article.status === "draft"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}>
                      {article.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right flex gap-6">
                    <button
                      onClick={() => {
                        handleEdit(article.id);
                      }}>
                      <EditIcon />
                    </button>
                    <button>
                      <TrashIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center font-medium pt-8">
                  No posts found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
