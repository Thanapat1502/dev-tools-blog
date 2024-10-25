import { data } from "autoprefixer";
import { blogPosts } from "../../data/blogPosts";
import axios from "axios";
import { useState, useEffect } from "react";

function BlogCard() {
  /**
   * effect ดึงข้อมูลจาก url มายัด state
   * state เรียก state ที่เก็บอารเย์ไว้ออกมา
   */
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    //ทุกครั้งที่ refresh จะเรียก getAllpost
    getAllpost();
  }, []);

  async function getAllpost() {
    //รับ url แล้ว setBlogs เลย
    try {
      const data =
        await axios.get(`https://blog-post-project-api.vercel.app/posts
`);
      setBlogs(data.data.posts);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
                {item.date}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function ArticleSection() {
  return (
    <article className="article-area  max-w-7xl mx-auto">
      <div className="gride-area flex flex-col justify-center items-center px-4 pt-6 pb-20 gap-12 lg:grid lg:grid-cols-2">
        <BlogCard />
      </div>
    </article>
  );
}
export default ArticleSection;
