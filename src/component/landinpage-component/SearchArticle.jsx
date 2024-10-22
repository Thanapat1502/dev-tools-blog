import SearchIcon from "../icon/SeachIcon";

function SeachBar() {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="border rounded-lg py-3 px-4 lg:w-1/3"
      />
      <span className="absolute right-16 top-8 lg:top-5">
        <SearchIcon />
      </span>
    </>
  );
}

function DropDown() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <div className="dropdown-container">
      <select name="category" id="category" className="w-full h-12 rounded-lg">
        {categories.map((item, index) => {
          return (
            <option key={index} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function CategoryButton() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <div className="category-dropdown-main rounded-lg py-3 px-4 relative hidden lg:flex lg:items-center">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className="font-medium text-base rounded-lg hover:bg-[#DAD6D1] px-5 py-3">
            {item}
          </button>
        );
      })}
    </div>
  );
}

function SearchArticle() {
  return (
    <nav className="felx flex-col gap-4 p-4 bg-[#F9F8F6]">
      <h3 className="font-semibold text-xl mb-4">Lastest article</h3>

      <div
        className="search-section-main rounded-2xl flex flex-col gap-4 w-full p-4 bg-[#EFEEEB] 
      lg:flex-row-reverse lg:justify-between">
        <SeachBar />
        <label htmlFor="category" className="lg:hidden">
          Category
        </label>
        <CategoryButton />
        <DropDown />
      </div>
    </nav>
  );
}
export default SearchArticle;
