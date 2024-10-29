import { blogPosts } from "@/data/blogPosts";
import Navebar from "@/component/landinpage-component/Navebar";
import CommentSection from "@/component/article-component/CommentSection";
import Footer from "@/component/landinpage-component/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const [post, setPost] = useState([]);
  // const {postId} = useParams()
  // useEffect(()=>{}, [postId])
  // >>>>> const fetchData = () => {
  //   try {
  //     const data = axios.get(`https://blog-post-project-api.vercel.app/posts`);
  //     console.log(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Navebar />
      <main className="main-container flex flex-col justify-center items-center mb-10">
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg"
          alt=""
        />

        <div className="article-container  flex flex-col justify-center items-start mx-4">
          <div className="title-container flex flex-col gap-7 my-6">
            <div className="category-date-row flex flex-row gap-7">
              <div className="category text-[#12B279] py-1 px-3 rounded-full bg-[#D7F2E9]">
                General
              </div>
              <div className="date-time font-medium text-base text-[#75716B] py-1 px-3 ">
                11 September 2024
              </div>
            </div>
            <h3 className="title font-semibold text-2xl">
              The Art of Mindfulness: Finding Peace in a Busy World
            </h3>
          </div>

          <p className="article">
            "## 1. Understanding Mindfulness\n\nMindfulness is the practice of
            being fully present and engaged in the moment, aware of your
            thoughts and feelings without distraction or judgment.\n\n## 2.
            Benefits of Mindfulness\n\nRegular mindfulness practice can reduce
            stress, improve focus, enhance emotional regulation, and boost
            overall well-being.\n\n## 3. Simple Mindfulness Techniques\n\nLearn
            easy-to-implement mindfulness exercises, from deep breathing to body
            scans, that you can incorporate into your daily routine.\n\n## 4.
            Mindfulness in Daily Life\n\nDiscover how to bring mindfulness into
            everyday activities, from eating to working, to create a more
            balanced and fulfilling life.\n\n## 5. Overcoming
            Challenges\n\nAddress common obstacles to mindfulness practice and
            learn strategies to maintain consistency in your mindfulness
            journey.",
          </p>
        </div>

        <div className="author-section bg-[#EFEEEB] flex flex-col mt-6 mx-4 rounded-2xl p-6 gap-3">
          <div className="author-header flex flex-row justify-start">
            <img src="" alt="" className="author-image" />
            <div className="author-name">
              <h3 className="text-[#75716B] font-medium text-xs">Author</h3>
              <h2 className="text-[#43403B] font-semibold text-xl">
                Thompson P.
              </h2>
            </div>
          </div>
          <hr />
          <p className="text-[#75716B] font-medium text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos consequatur laborum blanditiis vel corporis veniam
            fugit. Blanditiis minus quibusdam provident at. Quasi esse
            doloremque maiores voluptate praesentium animi nisi qui.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

//ทำ  ส่วนหลัก A.หน้าเพจหลัก B.ส่วนคอมเมนท์
/**
 * App() ใส่ลิงค์สำหรับ page/:pageId
 *
 * A.ใช้ useParam ระบุเลข Id
 * 1.ดึงข้อมูลจาก Array ลงมา
 * 2.ยัดใส่ element แล้ว style
 * 3.ใส่ props สำหรับส่วนคอมเมนท์ที่แยกออกไปด้วย
 *
 *
 * B.
 * 1.ทำปุ่ม onClick สำหรับ a.ปุ่มไลค์      b.ปุ่มคอมเมนต์
 * 2.ทำ area ที่ map ข้อมูลคอมเมนท์ออกมาแสดง
 */
