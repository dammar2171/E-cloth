import style from "../css/Cart.module.css";
function Coupon() {
  return (
    <div className={`${style.costumCoupon} py-4`}>
      <input type="text" /> <button>Apply Coupon</button>
    </div>
  );
}

export default Coupon;
