import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/products.context";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { loading, products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
    let thisProduct = products.find(
      (product) => product.id === Number(productId)
    );
    setProduct(thisProduct);
  }, [products, productId]);

  return (
    <>
      {product && (
        <div className="ProductDetailsPage">
          <img src={product.image} alt="product" />
          <p>{product.category}</p>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      )}
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}

export default ProductDetailsPage;
