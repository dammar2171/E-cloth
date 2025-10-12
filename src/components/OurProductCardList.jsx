import ProductCard from "./ProductCard";
import style from "../css/ProductCard.module.css";

function OurProductCardList({ items }) {
  return (
    <div className={`${style.cardlist}`}>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default OurProductCardList;
