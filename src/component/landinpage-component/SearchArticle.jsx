import SearchIcon from "../icon/SeachIcon";

function SearchArticle() {
  return (
    <nav className="felx flex-col gap-4 p-4 bg-[#F9F8F6]">
      <h3 className="font-semibold text-xl mb-4">Lastest article</h3>
      
      <div
        className="search-section-main rounded-2xl flex flex-col gap-4 w-full p-4 bg-[#EFEEEB] 
      lg:flex-row-reverse lg:justify-between">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg py-3 px-4 lg:w-1/3"
        />
        <span className="absolute right-16 top-8 lg:top-5">
          <SearchIcon />
        </span>

        <label htmlFor="category" className="lg:hidden">
          Category
        </label>

        <div className="category-dropdown-main border rounded-lg py-3 px-4 relative lg:flex  lg:items-center">
          <div className="dropdown-button gap-6 absolute hidden lg:flex ">
            <button className="font-medium text-base rounded-lg hover:bg-[#DAD6D1] px-5 py-3">
              Highlight
            </button>
            <button className="font-medium text-base rounded-lg hover:bg-[#DAD6D1] px-5 py-3">
              Cat
            </button>
            <button className="font-medium text-base rounded-lg hover:bg-[#DAD6D1] px-5 py-3">
              Inspiration
            </button>
            <button className="font-medium text-base rounded-lg hover:bg-[#DAD6D1] px-5 py-3">
              Ganeral
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default SearchArticle;
