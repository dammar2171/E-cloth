import { useContext } from "react";
import BottomHeader from "../components/BottomHeader";
import CheckoutContainer from "../components/CheckoutContainer";
import LowerFooter from "../components/LowerFooter";
import MainFooter from "../components/MainFooter";
import NotFound from "../components/NotFound";
import TopHeader from "../components/TopHeader";
import { AppContext } from "../store/Context";

function Checkout() {
  const { bagProducts } = useContext(AppContext);
  return (
    <>
      <TopHeader />
      <BottomHeader />
      {bagProducts.length === 0 ? (<NotFound/>) : (
      <CheckoutContainer />)}
      <MainFooter />
      <LowerFooter />
    </>
  );
}

export default Checkout;
