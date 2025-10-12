import { useContext } from "react";
import BottomHeader from "../components/BottomHeader";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import TopHeader from "../components/TopHeader";
import { AppContext } from "../store/Context";
import OurProduct from "../components/OurProduct";
function FavoriteProduct() {
  const { favoriteProducts } = useContext(AppContext);
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <OurProduct items={favoriteProducts} text={"Favorite Products"} />
      <MainFooter />
      <LowerFooter />
    </>
  );
}

export default FavoriteProduct;
