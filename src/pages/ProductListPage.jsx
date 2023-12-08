import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/products.context";
import { API_URL } from "../services/API_URL";

function ProductListPage() {
  const { loading, products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);

  return (
    <div className="ProductListPage">
      {loading && <p>Loading...</p>}
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <Link key={product.id} to={`/product/details/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductListPage;
