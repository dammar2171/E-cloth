import { useContext } from "react";
import BottomHeader from "../components/BottomHeader";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import NotFound from "../components/NotFound";
import OurProduct from "../components/OurProduct";
import TopHeader from "../components/TopHeader";
import { AppContext } from "../store/Context";
function NewCloth() {
  const { newProducts } = useContext(AppContext);
  return (
    <>
      <TopHeader />
      <BottomHeader />
      {newProducts.length === 0 && <NotFound />}
      <OurProduct items={newProducts} text={"New Products"} />
      <MainFooter />
      <LowerFooter />
    </>
  );
}

export default NewCloth;
