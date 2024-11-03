/* eslint-disable react/prop-types */
import {
  TwitterIcon,
  FacebookIcon,
  LinkedinColorIcon,
} from "../icon/SocialIconCollecntion";
import { HappyIcon, CopyIcon } from "../icon/IconCollection";

export default function CommentSection({ likeCount }) {
  return (
    <>
      <div className="like-container flex flex-col justify-center items-center h-40 gap-6 w-full bg-[#EFEEEB]">
        <butoon className="like-button border bg-white h-12 w-80 rounded-full flex flex-row justify-center items-center gap-1 font-medium text-base cursor-pointer">
          <span>
            <HappyIcon />
          </span>
          {likeCount}
        </butoon>
        <div className="icon-container flex flex-row gap-2 justify-center items-center">
          <button className="copy-button border rounded-full bg-white h-12 py-3 px-7 font-medium text-base flex items-center gap-1 text-[#26231E]">
            <span>
              <CopyIcon />
            </span>
            Copy link
          </button>
          <div className="social-collection flex flex-row gap-2">
            <a href="*" target="blank">
              <FacebookIcon />
            </a>
            <a href="*" target="blank">
              <LinkedinColorIcon />
            </a>
            <a href="*" target="blank">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      {/**form สำหรับส่งคอมเมนท์ */}
      <div className="form-container mt-6">
        <form action="post" className="comment-form flex flex-col">
          <label
            htmlFor="comment"
            className="font-medium text-base text-[#75716B]">
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            placeholder="What are your thoughts?"
            className="border rounded-lg h-28 w-96 pt-3 pb-1 pr-1 pl-4"></textarea>
          <button className="p-2 pr-10 pl-10 h-12 w-28 rounded-full bg-black text-white font-medium text-base mt-2">
            Send
          </button>
        </form>
      </div>
      {/**คอมเมนท์แอเรีย */}
      <div className="comments-area mx-4">
        {/**การ์ดสำหรับเรนเดอร์คอมเมนท์ */}
        <div className="comment-card flex flex-col gap-4 mt-6">
          <div className="profile-box flex flex-row items-center gap-3">
            <img src="" alt="" className="profile-img w-11 h-11 rounded-full" />
            <div className="profile-body">
              <h4 className="profile-name font-semibold text-xl text-[#43403B]">
                Jacob Lash
              </h4>
              <p className="date font-medium text-xs text-[#75716B]">
                12 September 2024 at 18:30
              </p>
            </div>
          </div>
          <p className="comment-body font-medium text-base text-[#75716B]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            qui unde aperiam, eveniet sint harum voluptate laboriosam, dolore
            laudantium autem totam voluptas natus repudiandae! Aperiam pariatur
            cumque non alias vitae.
          </p>
          <hr />
        </div>
      </div>
    </>
  );
}
