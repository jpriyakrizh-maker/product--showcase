import { useState } from "react";
import { motion } from "framer-motion";

import products from "../data/products";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

function ProductShowcase() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const product = products?.[currentProduct];

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
        {/* LEFT - PRODUCT INFO */}
        <ProductInfo
          product={product}
          selectedColorIndex={selectedColorIndex}
        />

        {/* RIGHT - SHOE IMAGE */}
        <ProductImage
          product={product}
          imageIndex={imageIndex}
          selectedColorIndex={selectedColorIndex}
        />

        {/* CONTROLS */}
        <div className="shoe-controls">

          {/* 1 2 3 4 */}
          <div className="angle-selector">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                className={`angle-button ${
                  imageIndex === index ? "active" : ""
                }`}
                onClick={() => setImageIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* BOTTOM CONTROLS */}
          <div className="bottom-controls">

            {/* COLOUR - LEFT */}
            <div className="color-selector">
              <div className="color-label">
                Colour —{" "}
                <span>
                  {product.colors[selectedColorIndex].name}
                </span>
              </div>

              <div className="color-options">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    type="button"
                    className={`color-circle ${
                      selectedColorIndex === index
                        ? "active"
                        : ""
                    }`}
                    style={{
                      backgroundColor: color.value,
                    }}
                    onClick={() => {
                      setSelectedColorIndex(index);
                      setImageIndex(0);
                    }}
                    title={color.name}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

{/* SHOE THUMBNAILS - RIGHT */}
<div className="shoe-type-selector">

  {/* WHITE */}
  <button
    type="button"
    className={`shoe-thumbnail ${
      selectedColorIndex === 1 ? "active" : ""
    }`}
    onClick={() => {
      setSelectedColorIndex(1);
      setImageIndex(0);
    }}
  >
    <img
      src={`${import.meta.env.BASE_URL}shoes/white/shoe1.png`}
      alt="White Shoe"
    />
  </button>

  {/* DARK BLUE */}
  <button
    type="button"
    className={`shoe-thumbnail ${
      selectedColorIndex === 0 ? "active" : ""
    }`}
    onClick={() => {
      setSelectedColorIndex(0);
      setImageIndex(0);
    }}
  >
    <img
      src={`${import.meta.env.BASE_URL}shoes/darkblue/shoe2.png`}
      alt="Dark Blue Shoe"
    />
  </button>

  {/* SKY BLUE */}
  <button
    type="button"
    className={`shoe-thumbnail ${
      selectedColorIndex === 2 ? "active" : ""
    }`}
    onClick={() => {
      setSelectedColorIndex(2);
      setImageIndex(0);
    }}
  >
    <img
      src={`${import.meta.env.BASE_URL}shoes/skyblue/shoe3.png`}
      alt="Sky Blue Shoe"
    />
  </button>

</div>
        </div>
      </div>
    </motion.div>
  </main>
);
}

export default ProductShowcase;