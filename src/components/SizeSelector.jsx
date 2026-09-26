function SizeSelector({
  sizes,
  selectedSize,
  setSelectedSize,
}) {
  return (
    <div className="size-selector">
      <p>SELECT SIZE</p>

      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={
              selectedSize === size
                ? "selected"
                : ""
            }
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;