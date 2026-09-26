import { motion } from "framer-motion";

function ProductInfo({ product, selectedColorIndex }) {
  const selectedColor = product.colors[selectedColorIndex];

  return (
    <motion.section
      className="product-info"
      key={product.id}
      initial={{
        opacity: 0,
        x: -35,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* PRODUCT NAME */}
      <h1>{product.name}</h1>

      {/* DESCRIPTION */}
      <p className="product-description">
        {product.description}
      </p>

      {/* PRICE */}
      <div className="product-price">
        {selectedColor.price}
      </div>

      {/* LINE */}
      <div className="info-line"></div>

      {/* ADD TO BAG */}
      <button
        type="button"
        className="add-to-bag"
        onClick={() => {
          alert(
            `${product.name} - ${selectedColor.name} added to bag`
          );
        }}
      >
        ADD TO BAG
      </button>
    </motion.section>
  );
}

export default ProductInfo;