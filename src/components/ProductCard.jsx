const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="product" />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default ProductCard;
