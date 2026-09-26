import { useState } from "react";
import { motion } from "framer-motion";

import products from "../data/products";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function ProductShowcase() {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const product = products?.[0];

  if (!product) {
    return (
      <main className="showcase">
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Arial, sans-serif",
            color: "#142333",
          }}
        >
          Product data not found.
        </div>
      </main>
    );
  }

  return (
    <main className="showcase">
      <motion.div
        className="showcase-container"
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <ProductInfo
          product={product}
          selectedColorIndex={selectedColorIndex}
        />

        <ProductImage
          product={product}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={setSelectedColorIndex}
        />
      </motion.div>
    </main>
  );
}

export default ProductShowcase;