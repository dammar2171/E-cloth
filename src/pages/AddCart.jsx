import TopHeader from "../components/TopHeader";
import BottomHeader from "../components/BottomHeader";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import { useContext } from "react";
import { AppContext } from "../store/Context";
import NotFound from "../components/NotFound";
import AddCartMainSection from "../components/AddCartMainSection";
import { useParams } from "react-router";
function AddCart() {
  const { id } = useParams();
  const { products } = useContext(AppContext);

  const product = products.find((item) => String(item.id) === id);
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <AddCartMainSection product={product} />
      {products.length === 1 && <NotFound />}
      <MainFooter />
      <LowerFooter />
    </>
  );
}

export default AddCart;
