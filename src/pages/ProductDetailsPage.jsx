import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/API_URL";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="">
      <img src={product.image} alt="product" />
      <p>{product.category}</p>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
