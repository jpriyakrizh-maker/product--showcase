const base = import.meta.env.BASE_URL;

const products = [
  {
    id: 1,
    name: "AEROLUX",
    description:
      "A lightweight everyday sneaker designed for comfort, movement and a clean modern look.",
    colors: [
      {
        name: "Dark Blue",
        value: "#142b4a",
        price: "₹3,499",
        images: [
          `${base}shoes/darkblue/shoe1.png`,
          `${base}shoes/darkblue/shoe2.png`,
          `${base}shoes/darkblue/shoe3.png`,
          `${base}shoes/darkblue/shoe4.png`,
        ],
      },
      {
        name: "White",
        value: "#f5f5f5",
        price: "₹3,499",
        images: [
          `${base}shoes/white/shoe1.png`,
          `${base}shoes/white/shoe2.png`,
          `${base}shoes/white/shoe3.png`,
          `${base}shoes/white/shoe4.png`,
        ],
      },
      {
        name: "Sky Blue",
        value: "#75c9ed",
        price: "₹3,499",
        images: [
          `${base}shoes/skyblue/shoe1.png`,
          `${base}shoes/skyblue/shoe2.png`,
          `${base}shoes/skyblue/shoe3.png`,
          `${base}shoes/skyblue/shoe4.png`,
        ],
      },
    ],
  },

  {
    id: 2,
    name: "SKYRUN",
    description:
      "A versatile running-inspired sneaker with a smooth silhouette and comfortable everyday fit.",
    colors: [
      {
        name: "Dark Blue",
        value: "#142b4a",
        price: "₹4,299",
        images: [
          `${base}shoes/darkblue/shoe1.png`,
          `${base}shoes/darkblue/shoe2.png`,
          `${base}shoes/darkblue/shoe3.png`,
          `${base}shoes/darkblue/shoe4.png`,
        ],
      },
      {
        name: "White",
        value: "#f5f5f5",
        price: "₹4,299",
        images: [
          `${base}shoes/white/shoe1.png`,
          `${base}shoes/white/shoe2.png`,
          `${base}shoes/white/shoe3.png`,
          `${base}shoes/white/shoe4.png`,
        ],
      },
      {
        name: "Sky Blue",
        value: "#75c9ed",
        price: "₹4,299",
        images: [
          `${base}shoes/skyblue/shoe1.png`,
          `${base}shoes/skyblue/shoe2.png`,
          `${base}shoes/skyblue/shoe3.png`,
          `${base}shoes/skyblue/shoe4.png`,
        ],
      },
    ],
  },

  {
    id: 3,
    name: "AIRFLOW",
    description:
      "A refined lifestyle sneaker combining a fresh appearance with lightweight comfort for daily wear.",
    colors: [
      {
        name: "Dark Blue",
        value: "#142b4a",
        price: "₹4,799",
        images: [
          `${base}shoes/darkblue/shoe1.png`,
          `${base}shoes/darkblue/shoe2.png`,
          `${base}shoes/darkblue/shoe3.png`,
          `${base}shoes/darkblue/shoe4.png`,
        ],
      },
      {
        name: "White",
        value: "#f5f5f5",
        price: "₹4,799",
        images: [
          `${base}shoes/white/shoe1.png`,
          `${base}shoes/white/shoe2.png`,
          `${base}shoes/white/shoe3.png`,
          `${base}shoes/white/shoe4.png`,
        ],
      },
      {
        name: "Sky Blue",
        value: "#75c9ed",
        price: "₹4,799",
        images: [
          `${base}shoes/skyblue/shoe1.png`,
          `${base}shoes/skyblue/shoe2.png`,
          `${base}shoes/skyblue/shoe3.png`,
          `${base}shoes/skyblue/shoe4.png`,
        ],
      },
    ],
  },
];

export default products;