import { motion, AnimatePresence } from "framer-motion";

function ProductImage({
  product,
  imageIndex,
  setImageIndex,
  selectedColorIndex,
  setSelectedColorIndex,
}) {
  const colors = product.colors;

  const selectedColor = colors[selectedColorIndex];

  const images = selectedColor.images;

  return (
    <section className="product-image-section">
      {/* SHOE IMAGE */}

      <div className="image-display">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${selectedColorIndex}-${imageIndex}`}
            src={images[imageIndex]}
            alt={`${product.name} ${selectedColor.name}`}
            className="product-image"
            initial={{
              opacity: 0,
              y: -100,
              x: 40,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 70,
              x: -30,
              scale: 0.9,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </AnimatePresence>
      </div>

      {/* IMAGE 1 2 3 4 */}

      <div className="image-number-selector">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`image-number ${
              imageIndex === index ? "active" : ""
            }`}
            onClick={() => setImageIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* COLOUR SELECTOR */}

      <div className="color-selector">
        <div className="color-label">
          Colour — <span>{selectedColor.name}</span>
        </div>

        <div className="color-options">
          {colors.map((color, index) => (
            <button
              key={color.name}
              type="button"
              className={`color-circle ${
                selectedColorIndex === index ? "active" : ""
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
    </section>
  );
}

export default ProductImage;