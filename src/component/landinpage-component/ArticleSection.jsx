import { blogPosts } from "../../data/blogPosts";
function BlogCard() {
  return (
    <>
      <div className="demo-div-delede-after-finish flex felx-col justify-center">
        <div className="card-container flex flex-col w-96">
          <img src={blogPosts[0].image} alt="cat" className="rounded-2xl" />
          <div className="category rounded-full bg-[#D7F2E9] text-[#12B279] font-medium text-sm text-center px-3 py-1 w-fit mt-4 mb-2">
            {blogPosts[0].category}
          </div>
          <h4 className="title font-semibold text-xl text-[#26231E]">
            {blogPosts[0].title}
          </h4>
          <p className="description font-medium text-sm text-[#75716B] mt-2">
            {blogPosts[0].description}
          </p>
          <div className="author-and-date flex felx-row justify-between mt-4">
            <div className="author flex gap-1">
              <img
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt="author-picture"
                className="w-6 h-6 rounded-full"
              />
              {blogPosts[0].author}
            </div>
            <div className="date">{blogPosts[0].date}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function ArticleSection() {
  return (
    <>
      <BlogCard />
    </>
  );
}
export default ArticleSection;
