import HeroSection from "./component/landinpage-component/HeroSection";
import Navebar from "./component/landinpage-component/Navebar";
import SearchArticle from "./component/landinpage-component/SearchArticle";
import Footer from "./component/landinpage-component/Footer";
export default function HomePage() {
  return (
    <>
      <Navebar />
      <HeroSection />
      <SearchArticle />
      <Footer />
    </>
  );
}
