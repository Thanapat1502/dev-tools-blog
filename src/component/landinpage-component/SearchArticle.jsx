import SearchIcon from "../icon/SeachIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SeachBar() {
  return (
    <>
      <div className="search-bar-container relative w-full h-12 lg:w-1/3 top-3">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg py-3 px-4 w-full"
        />
        <button className="absolute right-3 top-4 cursor-pointer">
          <SearchIcon />
        </button>
      </div>
    </>
  );
}

function DropDown() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <div className="dropdown-container lg:hidden">
      <label htmlFor="category" className="lg:hidden mb-2">
        Category
      </label>
      <Select>
        <SelectTrigger className="w-full h-12 rounded-lg border">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, index) => {
            return (
              <SelectItem key={index} value={item.toLowerCase()}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

function CategoryButton() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <>
      <DropDown />
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
    </>
  );
}

function SearchArticle() {
  return (
    <nav className="flex flex-col gap-4 p-4 bg-[#F9F8F6]">
      <h3 className="font-semibold text-xl mb-4">Lastest article</h3>

      <div
        className="search-section-main rounded-2xl flex flex-col gap-4 w-full p-4 bg-[#EFEEEB] 
      lg:flex-row-reverse lg:justify-between">
        <SeachBar />
        <CategoryButton />
      </div>
    </nav>
  );
}
export default SearchArticle;
