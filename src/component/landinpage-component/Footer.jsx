import {
  LinkedinIcon,
  GitHubIcon,
  InstragramIcon,
} from "../icon/SocialIconCollecntion";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };
  return (
    <footer className="flex flex-col justify-center items-center py-10 px-4 gap-6 bg-[#EFEEEB] lg:flex-row lg:justify-between lg:py-16 lg:px-32">
      <div className="social-media flex justify-center items-center gap-6">
        <h1 className="font-medium text-base">Get in touch</h1>
        <ul className="flex gap-3">
          <a href="*">
            <LinkedinIcon />
          </a>
          <a href="*">
            <GitHubIcon />
          </a>
          <a href="*">
            <InstragramIcon />{" "}
          </a>
        </ul>
      </div>
      <button
        onClick={handleHomePage}
        className="font-medium text-base underline">
        Home page
      </button>
    </footer>
  );
}
