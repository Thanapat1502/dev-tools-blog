import { data } from "autoprefixer";
import ReactLoading from "react-loading";
import axios from "axios";
import { useState, useEffect } from "react";

/**สร้าง State isLoading ขึ้นมาเพื่อบอกสถานะการ Request ข้อมูล ว่าตอนนี้หน้าเว็บไซต์กำลังโหลดข้อมูลจาก Server อยู่หรือไม่ เพื่อนำมา Render ข้อความ "Loading..." 
 * ค่าเริ่มต้นของ State นี้ จะเป็น false
State Loading จะเป็น true ก่อนที่จะสร้าง Request (ก่อนที่จะ Execute axios) และจะกลับมาเป็น false เมื่อ Request สำเร็จ
 */

export default function ArticleArea(props) {
  /**
   * effect ดึงข้อมูลจาก url มายัด state
   * state เรียก state ที่เก็บอารเย์ไว้ออกมา
   */
  const [blogs, setBlogs] = useState([]);
  const [postLimit, setPostlimit] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //ทุกครั้งที่ refresh จะเรียก getAllpost
    getAllpost();
  }, [props, postLimit]);

  //สำหรับปุ่ม viewmore
  const handleViewMore = () => {
    setPostlimit(postLimit + 6);
    console.log(postLimit);
  };
  //สำหรับ isLoading
  const toggleLoading = (onOff) => {
    setIsLoading(onOff);
  };

  async function getAllpost() {
    //รับ url แล้ว setBlogs เลย
    if (props.category !== "highlight" && props.category !== "") {
      try {
        toggleLoading(true);
        console.log("start: " + isLoading);

        const data = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?category=${props.category}&limit=${postLimit}`
        );
        setBlogs(data.data.posts);
        toggleLoading(false);
        console.log("end: " + isLoading);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        toggleLoading(true);
        const data = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?&limit=${postLimit}`
        );
        setBlogs(data.data.posts);
        toggleLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <article className="article-area pb-32 max-w-7xl mx-auto flex flex-col justify-center items-center p-1 mt-2">
        {isLoading ? (
          <div className="loading-screen flex flex-col justify-center items-center">
            <ReactLoading type="spokes" color="#000000" />
            <h1>Loading...</h1>
          </div>
        ) : null}
        <div className="gride-area flex flex-col justify-center items-center px-4 pt-6 pb-20 gap-12 lg:grid lg:grid-cols-2">
          {blogs.map((item, index) => {
            return (
              <div
                key={index}
                className="card-container flex flex-col justify-center w-96 h-[27rem] mt-1 mb-1 px-2 py-2 lg:w-[37rem] lg:h-[36rem]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl w-80 h-52 object-cover lg:w-[37rem] lg:h-96"
                />
                <div className="category rounded-full bg-[#D7F2E9] text-[#12B279] font-medium text-sm text-center px-3 py-1 w-fit mt-4 mb-2">
                  {item.category}
                </div>
                <div className="text-area w-80 h-36 flex flex-col gap-2 lg:w-[37rem]">
                  <h4 className="title font-semibold text-xl text-[#26231E]">
                    {item.title}
                  </h4>
                  <p className="description font-medium text-sm text-[#75716B]">
                    {item.description}
                  </p>
                </div>
                <div className="author-and-date flex flex-row gap-8 mt-4 mb-4 ">
                  <div className="author flex gap-1">
                    <img
                      src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                      alt="author-picture"
                      className="w-6 h-6 rounded-full"
                    />
                    {item.author}
                  </div>
                  <div key={index} className="date">
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="underline font-medium text-base"
          onClick={handleViewMore}>
          View more
        </button>
      </article>
    </>
  );
}
