import { blogPosts } from "../../data/blogPosts";
function BlogCard() {
  return (
    <>
      {blogPosts.map((item, index) => {
        return (
          <div
            key={index}
            className="card-container flex flex-col justify-center w-96 px-2 py-2">
            <img
              key={index}
              src={item.image}
              alt={item.title}
              className="rounded-2xl"
            />
            <div
              key={index}
              className="category rounded-full bg-[#D7F2E9] text-[#12B279] font-medium text-sm text-center px-3 py-1 w-fit mt-4 mb-2">
              {item.category}
            </div>
            <h4
              key={index}
              className="title font-semibold text-xl text-[#26231E]">
              {item.title}
            </h4>
            <p
              key={index}
              className="description font-medium text-sm text-[#75716B] mt-2">
              {item.description}
            </p>
            <div className="author-and-date flex felx-row justify-between mt-4 mb-4">
              <div key={index} className="author flex gap-1">
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
    <article className="grid-area flex flex-col justify-center items-center lg:grid lg:grid-cols-2 ">
      <BlogCard />
    </article>
  );
}
export default ArticleSection;
