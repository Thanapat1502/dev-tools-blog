// import { blogPosts } from "@/data/blogPosts";
import Navebar from "@/component/landinpage-component/Navebar";
import CommentSection from "@/component/article-component/CommentSection";
import Footer from "@/component/landinpage-component/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

//ทำ  ส่วนหลัก A.หน้าเพจหลัก B.ส่วนคอมเมนท์
/**
 * App() ใส่ลิงค์สำหรับ page/:pageId
 *
 * A.ใช้ useParam ระบุเลข Id
 * 1.ดึงข้อมูลจาก Array ลงมา
 * 2.ยัดใส่ element แล้ว style
 * 3.ใส่ props สำหรับส่วนคอมเมนท์ที่แยกออกไปด้วย
 *
 * B.
 * 1.ทำปุ่ม onClick สำหรับ a.ปุ่มไลค์      b.ปุ่มคอมเมนต์
 * 2.ทำ area ที่ map ข้อมูลคอมเมนท์ออกมาแสดง
 */

export default function ArticlePage() {
  const [singlePost, setSinglePost] = useState({});
  const { postId } = useParams();
  const fetchData = async () => {
    try {
      const data = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${postId}`
      );
      console.log(data);
      setSinglePost(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [postId]);

  return (
    <>
      <Navebar />
      <main className="main-container flex flex-col justify-center items-center mb-10 lg:my-10 px-28 pb-28 pt-14">
        <img
          src={singlePost.image}
          alt=""
          className="rounded-2xl w-full h-[36rem] object-cover"
        />
        <div className="article-container w-full mb-10 lg:flex lg:flex-row lg:justify-between">
          <div className="article-box flex flex-col justify-center px-4 items-start">
            <div className="title-container flex flex-col gap-7 my-6">
              <div className="category-date-row flex flex-row gap-7">
                <div className="category text-[#12B279] py-1 px-3 rounded-full bg-[#D7F2E9]">
                  {singlePost.category}
                </div>
                <div className="date-time font-medium text-base text-[#75716B] py-1 px-3">
                  {new Date(singlePost.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
              <h3 className="title font-semibold text-2xl">
                {singlePost.title}
              </h3>
            </div>
            <div className="content w-full ">
              <div className="markdown">
                <ReactMarkdown>{singlePost.content}</ReactMarkdown>
              </div>
            </div>
          </div>

          <div className="author-section-lg bg-[#EFEEEB] hidden lg:flex lg:flex-col mt-6 mx-4 rounded-2xl p-6 gap-3 h-96 w-80 lg:w-72">
            <div className="author-header flex flex-row justify-start gap-3">
              <img
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt=""
                className="author-image w-11 h-11 rounded-full"
              />
              <div className="author-name">
                <h3 className="text-[#75716B] font-medium text-xs">Author</h3>
                <h2 className="text-[#43403B] font-semibold text-xl">
                  {singlePost.author}
                </h2>
              </div>
            </div>
            <hr />
            <p className="text-[#75716B] font-medium text-base">
              {singlePost.description}
            </p>
          </div>
          <div className="author-section-sm bg-[#EFEEEB] flex flex-col mt-6 mx-4 rounded-2xl p-6 gap-3 lg:hidden">
            <div className="author-header flex flex-row justify-start items-center gap-3">
              <img
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt=""
                className="author-image w-11 h-11 rounded-full" /**แก้ */
              />
              <div className="author-name">
                <h3 className="text-[#75716B] font-medium text-xs">Author</h3>
                <h2 className="text-[#43403B] font-semibold text-xl">
                  {singlePost.author}
                </h2>
              </div>
            </div>
            <hr />
            <p className="text-[#75716B] font-medium text-base">
              {singlePost.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <CommentSection likeCount={singlePost.likes} />
        </div>
      </main>
      <Footer />
    </>
  );
}
