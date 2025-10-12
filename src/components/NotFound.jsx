import notFound from "../assets/product-not-found.webp";
function NotFound() {
  return (
    <section className="container-fluid costumNotFound">
      <img src={notFound} alt="product not found" />
      <p>Product Not Found!</p>
    </section>
  );
}

export default NotFound;
