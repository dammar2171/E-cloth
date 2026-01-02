import { useContext } from "react";
import BottomHeader from "../components/BottomHeader";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import NotFound from "../components/NotFound";
import OurProduct from "../components/OurProduct";
import TopHeader from "../components/TopHeader";
import SearchModal from "../components/SearchModal";
import { AppContext } from "../store/Context";
function NewCloth() {
  const { products, openSearchModal } = useContext(AppContext);
  const newProducts = products.filter((items) => items.type == "NewArrival");
  return (
    <>
      <TopHeader />
      <BottomHeader />
      {newProducts.length === 0 && <NotFound />}
      <OurProduct items={newProducts} text={"New Products"} />
      {openSearchModal && <SearchModal />}
      <MainFooter />
      <LowerFooter />
    </>
  );
}

export default NewCloth;
