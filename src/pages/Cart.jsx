import { useContext } from "react";
import BottomHeader from "../components/BottomHeader";
import CartContainer from "../components/CartContainer";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import TopHeader from "../components/TopHeader";
import NotFound from "../components/NotFound";
import { AppContext } from "../store/Context";

const Cart = () => {
  const { bagProducts } = useContext(AppContext);
  return (
    <>
      <TopHeader />
      <BottomHeader />
      {bagProducts.length > 0 ? <CartContainer /> : <NotFound />}
      <MainFooter />
      <LowerFooter />
    </>
  );
};
export default Cart;
