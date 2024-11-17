import { Button } from "../general-components/button";
import { EditIcon, TrashIcon } from "../icon/IconCollection";
import { SelectCategory, SelectStatus } from "./SelectButtons";

export default function ArticleMenagement() {
  return (
    <div className="body w-full h-screen bg-[#F9F8F6] pb-20 px-16 ">
      <div className="category-header flex justify-between items-center py-6">
        <h3 className="font-semibold text-2xl text-[#26231E]">
          Article management
        </h3>
        <Button
          buttonText={"+ Create article"}
          width={"w-60"}
          bgColor={"bg-black"}
          textColor={"text-white"}
        />
      </div>

      <div className="main-container flex flex-col gap-4">
        {/**เพิ่ม search bar */}
        <div className="search-section flex flex-row justify-between">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="w-96 h-12 py-3 pr-3 pl-4 rounded-lg border border-[#DAD6D1]"
            />
          </div>
          <div className="select-section flex gap-4">
            <SelectStatus />
            <SelectCategory />
          </div>
        </div>

        <div className=" flex flex-row justify-between items-center">
          <div className="text-[#75716B] py-3 px-6 text-start shadow-md font-medium text-base"></div>
          {/**-------------รอ map------------------------------------ */}
          <div className="categories py-3 px-6 font-medium text-base text-[#43403B] ">
            hi
          </div>
          <div
            className="menagement-buttons flex gap-4 px-3
          ">
            <button>
              <EditIcon />
            </button>
            <button>
              <TrashIcon />
            </button>
          </div>
          {/**------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}

// แก้เป็น map ข้อมูลทีหลัง
// code อ้างอิง
//   v
//   v
// {categories.map((item, index) => {
//     return (
//       <div
//         key={`${index}`}
//         className="container flex flex-row justify-between items-center">
//         <div className="categories py-3 px-6 font-medium text-base text-[#43403B] ">
//           {`${item}`}
//         </div>
//         <div
//           className="menagement-buttons flex gap-4 px-3
//         ">
//           <button>
//             <EditIcon />
//           </button>
//           <button>
//             <TrashIcon />
//           </button>
//         </div>
//       </div>
//     );
//   })}
