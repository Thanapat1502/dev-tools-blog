function Slogan() {
  return (
    <>
      <div className="flex flex-col lg:w-1/3 ">
        <h2 className="font-semibold text-4xl text-center lg:text-end pb-2 ">
          Stay <br className="hidden lg:block" />
          Informed, <br />
          Stay Inspired
        </h2>
        <p className="text-base text-center lg:text-end text-[#75716B] font-semibold pt-2 pb-4">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>
    </>
  );
}

function ImageContainer() {
  return (
    <img
      src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
      alt="a man with a cat"
      className="h-[530px] object-cover rounded-lg shadow-lg mb-8 lg:w-1/3"
    />
  );
}

function IntroArticle() {
  return (
    <div className="flex felx-col lg:w-1/3">
      <div className="intro-article text-start">
        <div>
          <p className="font-medium text-xs text-[#75716B]">-Author</p>
          <h3 className="font-semibold text-2xl">Thompson P.</h3>
        </div>
        <p className="font-medium text-base text-[#75716B]">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
          <br />
          <br />
          When i’m not writing, I spends time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </div>
  );
}

{
  /**------------------*/
}

function HeroSection() {
  return (
    <main className="pt-10 pb-10 pr-4 pl-4 flex flex-col gap-16 lg:flex-row justify-center items-center bg-[#F9F8F6]">
      <Slogan />
      <ImageContainer />
      <IntroArticle />
    </main>
  );
}
export default HeroSection;
