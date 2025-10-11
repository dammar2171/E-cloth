import BottomHeader from "../components/BottomHeader";
import Features from "../components/Features";
import HomeCrousal from "../components/HomeCrousal";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import OurProduct from "../components/OurProduct";
import TopBarHome from "../components/TopBarHome";
import TopHeader from "../components/TopHeader";

function Home() {
  return (
    <>
      <TopBarHome />
      <TopHeader />
      <BottomHeader />
      <HomeCrousal />
      <Features />
      <OurProduct />
      <MainFooter />
      <LowerFooter />
    </>
  );
}

export default Home;
