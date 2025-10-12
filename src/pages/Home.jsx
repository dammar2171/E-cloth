import BottomHeader from "../components/BottomHeader";
import Features from "../components/Features";
import HomeCrousal from "../components/HomeCrousal";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import OurProduct from "../components/OurProduct";
import TopBarHome from "../components/TopBarHome";
import TopHeader from "../components/TopHeader";
import { useContext } from "react";
import { AppContext } from "../store/Context";
function Home() {
  const { products } = useContext(AppContext);
  return (
    <>
      <TopBarHome />
      <TopHeader />
      <BottomHeader />
      <HomeCrousal />
      <Features />
      <OurProduct items={products} text={"Our Products"} />
      <MainFooter />
      <LowerFooter />
    </>
  );
}

export default Home;
