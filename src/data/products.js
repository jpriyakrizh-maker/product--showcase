const products = [
  {
    id: 1,
    name: "AEROLUX",
    description:
      "Lightweight performance sneakers designed for everyday comfort and modern movement.",

    colors: [
      {
        name: "Dark Blue",
        value: "#173B63",
        price: "₹1,499",
        images: [
          `${import.meta.env.BASE_URL}shoes/darkblue/shoe1.png`,
          `${import.meta.env.BASE_URL}shoes/darkblue/shoe2.png`,
          `${import.meta.env.BASE_URL}shoes/darkblue/shoe3.png`,
          `${import.meta.env.BASE_URL}shoes/darkblue/shoe4.png`,
        ],
      },

      {
        name: "White",
        value: "#ffffff",
        price: "₹2,000",
        images: [
          `${import.meta.env.BASE_URL}shoes/white/shoe1.png`,
          `${import.meta.env.BASE_URL}shoes/white/shoe2.png`,
          `${import.meta.env.BASE_URL}shoes/white/shoe3.png`,
          `${import.meta.env.BASE_URL}shoes/white/shoe4.png`,
        ],
      },

      {
        name: "Sky Blue",
        value: "#75cfff",
        price: "₹1,499",
        images: [
          `${import.meta.env.BASE_URL}shoes/skyblue/shoe1.png`,
          `${import.meta.env.BASE_URL}shoes/skyblue/shoe2.png`,
          `${import.meta.env.BASE_URL}shoes/skyblue/shoe3.png`,
          `${import.meta.env.BASE_URL}shoes/skyblue/shoe4.png`,
        ],
      },
    ],

    sizes: ["6", "7", "8", "9", "10"],
  },
];

export default products;