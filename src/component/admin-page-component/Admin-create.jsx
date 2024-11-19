import axios from "axios";
import { Button } from "../general-components/button";
import { useState, useEffect } from "react";
import { ImageIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate, useParams } from "react-router-dom";

export function AdminCreate() {
  //---------------------------------------------------------------------
  const [drafted, setDrafted] = useState({}); //สำหรับรวม form draft
  const [published, setPublished] = useState({}); //สำหรับ publish?
  const [thumbnail, setThumbnail] = useState(""); //image
  const [fetchCategorise, setFetchCategorise] = useState([]); //Fetched category
  const [authorName, setAutherName] = useState("");
  const [category, setCategory] = useState(""); //category
  const [title, setTitle] = useState(""); //title
  const [intro, setIntro] = useState(""); //inrtoduction
  const [content, setContent] = useState(""); //content

  const navigate = useNavigate();

  const handleSelector = (e) => {
    setCategory(e);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleIntro = (e) => {
    setIntro(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  //useEffect(() => {const fetch = axios.get(".......");}, []); //เข้าถึง category ใน db
  const handleSaveAndPublish = (event) => {
    event.preventDefault();
    const data = {
      image: thumbnail,
      category: category,
      authorName: authorName,
      title: title,
      intro: intro,
      content: content,
    };
    const publishPost = { ...data, status: "publish" };
    // await axios.post("/แก้url");
    console.log(publishPost);
    navigate("/admin/article-menage");
  };
  const handleSaveAsDraft = (event) => {
    event.preventDefault();
    const data = {
      image: thumbnail,
      category: category,
      authorName: authorName,
      title: title,
      intro: intro,
      content: content,
    };
    const draftedPost = { ...data, status: "draft" };
    // await axios.post("/แก้ url")
    console.log(draftedPost);
    navigate("/admin/article-menage");
  };

  return (
    <div className="body w-full h-screen bg-[#F9F8F6] pb-20 px-16 ">
      <div className="create-header flex justify-between items-center py-6 border-b">
        <h3 className="font-semibold text-2xl text-[#26231E]">Create</h3>
        <div className="save-buttons">
          <Button
            callBack={handleSaveAsDraft}
            buttonText={"Save as draft"}
            width={"w-60"}
            bgColor={"bg-white"}
            textColor={"text-black"}
          />
          <Button
            callBack={handleSaveAndPublish}
            buttonText={"Save and publish"}
            width={"w-60"}
            bgColor={"bg-black"}
            textColor={"text-white"}
          />
        </div>
      </div>

      <form action="post" className="flex flex-col gap-7 px-16 pb-32 pt-10">
        <div className="thumnail">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-medium mb-2">
            Thumbnail image
          </label>
          <div className="flex items-end space-x-4">
            <div className="flex justify-center items-center w-full max-w-lg h-64 px-6 py-20 border-2 border-gray-300 border-dashed rounded-md bg-gray-50">
              <div className="text-center space-y-2">
                <ImageIcon className="mx-auto h-8 w-8 text-gray-400" />
              </div>
            </div>
            <label
              htmlFor="file-upload"
              className="px-8 py-2 bg-background rounded-full text-foreground border border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors cursor-pointer">
              <span>Upload thumbnail image</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
          </div>
        </div>

        <div className="category flex flex-col">
          <label
            htmlFor="category"
            className="font-medium text-base text-[#75716B]">
            Category
          </label>
          <Select onValueChange={handleSelector}>
            <SelectTrigger className="w-1/2">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="inspiration">Inspiration</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="author flex flex-col">
          <label
            htmlFor="author"
            className="font-medium text-base text-[#75716B]">
            Author name
          </label>
          <input
            type="text"
            value={"Tomson P."}
            disabled
            className="font-medium text-base text-[#75716B]"
          />
        </div>
        <div className="title">
          <label
            htmlFor="title"
            className="font-medium text-base text-[#75716B]">
            Title
          </label>
          <input
            type="text"
            placeholder="Article title"
            onChange={handleTitle}
            className="w-full h-12 rounded-lg border pl-4 pr-3 py-3"
          />
        </div>
        <div className="introduction">
          <label
            htmlFor="introduction"
            className="font-medium text-base text-[#75716B]">
            Introduction (max 120 letters)
          </label>
          <textarea
            name="introduction"
            id="introduction"
            type="text"
            placeholder="introduction"
            maxLength={120}
            onChange={handleIntro}
            className="w-full min-h-36 rounded-lg border pl-4 pr-3 py-3"
          />
        </div>
        <div className="content">
          <label
            htmlFor="content"
            className="font-medium text-base text-[#75716B]">
            Content
          </label>
          <textarea
            name="content"
            id="adminContent"
            type="text"
            placeholder="Content"
            onChange={handleContent}
            className="w-full min-h-96 rounded-lg border pl-4 pr-3 py-3"
          />
        </div>
      </form>
    </div>
  );
}
