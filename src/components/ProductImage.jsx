import { motion, AnimatePresence } from "framer-motion";

function ProductImage({
  product,
  imageIndex,
  selectedColorIndex,
}) {
  const selectedColor = product.colors[selectedColorIndex];
  const images = selectedColor.images;

  return (
    <section className="product-image-section">
      {/* MAIN SHOE IMAGE */}
      <div className="image-display">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${product.id}-${selectedColorIndex}-${imageIndex}`}
            src={images[imageIndex]}
            alt={`${product.name} ${selectedColor.name}`}
            className="product-image"
            initial={{
              opacity: 0,
              x: 80,
              y: -30,
              scale: 0.88,
              rotate: 3,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              x: -80,
              y: 30,
              scale: 0.9,
              rotate: -3,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ProductImage;
