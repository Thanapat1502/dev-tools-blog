import { Button } from "../general-components/button";
import { EditIcon, TrashIcon } from "../icon/IconCollection";
import { useState } from "react";

export default function CategoryMenagement() {
  const categories = ["Cat", "General", "Inspiration"]; //แก้เป็นดึงข้อมูลจาก database ทีหัง
  return (
    <div className="body w-full h-screen bg-[#F9F8F6] pb-20 px-16 ">
      <div className="category-header flex justify-between items-center py-6">
        <h3 className="font-semibold text-2xl text-[#26231E]">
          Category management
        </h3>
        <Button
          buttonText={"+ Create category"}
          width={"w-60"}
          bgColor={"bg-black"}
          textColor={"text-white"}
        />
      </div>

      <div className="main-container flex flex-col gap-4">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 h-12 py-3 pr-3 pl-4 rounded-lg border border-[#DAD6D1]"
          />
        </div>

        <div className="category-container border border-[#DAD6D1] rounded-lg">
          <div className="text-[#75716B] py-3 px-6 text-start shadow-md font-medium text-base">
            Category
          </div>
          {categories.map((item, index) => {
            return (
              <div
                key={`${index}`}
                className="container flex flex-row justify-between items-center">
                <div className="categories py-3 px-6 font-medium text-base text-[#43403B] ">
                  {`${item}`}
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
