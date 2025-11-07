import shoes1 from "../assets/images/shoes1.webp";
import shoes2 from "../assets/images/shoes2.webp";
import shoes3 from "../assets/images/shoes3.webp";
import shoes4 from "../assets/images/shoes4.webp";
import shoes5 from "../assets/images/shoes5.webp";
import shoes6 from "../assets/images/shoes6.webp";
import jacket1 from "../assets/images/jacket1.webp";
import jacket2 from "../assets/images/jacket2.webp";
import jacket3 from "../assets/images/jacket3.webp";
// import jacket4 from "../assets/images/jacket4.webp";
import jacket4 from "../assets/images/jacket4.png";
// import jacket5 from "../assets/images/jacket5.webp";
import jacket5 from "../assets/images/jacket5.png";
import jeans1 from "../assets/images/jeans1.png";
import jeans2 from "../assets/images/jeans2.png";
import jeans3 from "../assets/images/jeans3.png";
import jeans4 from "../assets/images/jeans4.png";
import jeans5 from "../assets/images/jeans5.png";
import shirt1 from "../assets/images/shirt1.png";
import shirt2 from "../assets/images/shirt2.png";
import shirt3 from "../assets/images/shirt3.png";
import shirt4 from "../assets/images/shirt4.png";
import shirt5 from "../assets/images/shirt5.png";

export const products = [
  // Shoes

  {
    id: 1,
    brand: "Nike",
    // title: "Pegasus 41 Running Shoes For Men.",
    title: "Pegasus 41",
    description: "nike-anthracite-cyber-black-smoke-grey-original",
    category: "Shoes",
    price: 11895,
    image: shoes1,
  },
  {
    id: 2,
    brand: "Nike",
    // title: "Downshifter 13 Running Shoes For Men.",
    title: "Downshifter 13",
    description: "nike-white-black-hyper-turq-concord-orange-original",
    category: "Shoes",
    price: 4295,
    image: shoes2,
  },
  {
    id: 3,
    brand: "Nike",
    // title: "Promina Walking Shoes For Men.",
    title: "Promina",
    description: "nike-black-parachute-beige-sail-gum-lt-brown-original",
    category: "Shoes",
    price: 4995,
    image: shoes3,
  },

  {
    id: 4,
    brand: "New Balance",
    // title: "BB550 Sneakers For Men.",
    title: "BB550 Sneakers",
    description: "newbalance-vintage-basketball-white-green-leather-original",
    category: "Shoes",
    price: 6370,
    image: shoes4,
  },
  {
    id: 5,
    brand: "New Balance",
    // title: "RC42 casual Shoes Sneakers For Men.",
    title: "RC42 Casual Sneakers",
    description: "newbalance-beige-white-minimalist-casual-sneaker-original",
    category: "Shoes",
    price: 5390,
    image: shoes5,
  },
  // {
  //   id: 6,
  //   brand: "Skechers",
  //   title: "GO WALK ARCH FIT-IDYLLIC Sneakers For Men.",
  //   description: "skechers-navy-gold-arch-fit-lowtop-original",
  //   category: "Shoes",
  //   price: 4319,
  //   image: shoes6,
  // },

  //   Jacket
  {
    id: 7,
    brand: "Adidas",
    // title: "Men Printed Sports Jacket",
    title: "Printed Sports Jacket",
    description: "adidas-original",
    category: "Men's Jacket",
    price: 6999,
    image: jacket1,
  },

  {
    id: 8,
    brand: "Adidas",
    // title: "Men Striped Sports Jacket.",
    title: "Striped Sports Jacket",
    description: "adidas-original",
    category: "Men's Jacket",
    price: 6999,
    image: jacket2,
  },
  {
    id: 9,
    brand: "Adidas",
    title: "Solid Sports Jacket",
    description: "adidas-original",
    category: "Men's Jacket",
    price: 5499,
    image: jacket3,
  },
  {
    id: 10,
    brand: "Flying Machine",
    title: "Solid Puffer Jacket",
    description: "flying-machine-original",
    category: "Men's Jacket",
    price: 2999,
    image: jacket4,
  },
  {
    id: 11,
    brand: "Killer",
    title: "Solid Quilted Jacket",
    description: "killer-original",
    category: "Men's Jacket",
    price: 2049,
    image: jacket5,
  },

  // Jeans
  {
    id: 12,
    brand: "Levi's",
    title: "512 Slim Mid Rise Blue Jeans",
    description: "levis-blue-slim-fit-stretchable-mid-rise-jeans-original",
    category: "Men's Jeans",
    price: 1589,
    image: jeans1,
  },
  {
    id: 13,
    brand: "Pepe Jeans",
    title: "Straight Fit Mid Rise Blue Jeans",
    description: "pepejeans-straight-fit-mid-rise-blue-denim-original",
    category: "Men's Jeans",
    price: 1349,
    image: jeans2,
  },
  {
    id: 14,
    brand: "Lee",
    title: "Slim Mid Rise Dark Blue Jeans",
    description: "lee-slim-fit-mid-rise-darkblue-denim-original",
    category: "Men's Jeans",
    price: 1253,
    image: jeans3,
  },
  {
    id: 15,
    brand: "Mufti",
    title: "Skinny Mid Rise Grey Jeans",
    description: "mufti-skinny-fit-mid-rise-grey-denim-original",
    category: "Men's Jeans",
    price: 1449,
    image: jeans4,
  },
  {
    id: 16,
    brand: "Wrangler",
    title: "Regular Mid Rise Grey Jeans",
    description: "wrangler-regular-fit-mid-rise-grey-denim-original",
    category: "Men's Jeans",
    price: 1279,
    image: jeans5,
  },
  // Shirts
  {
    id: 17,
    brand: "Roadster",
    title: "Spread Collar Casual Shirt",
    description:
      "roadster-orange-regular-fit-checkered-spread-collar-casual-shirt-original",
    category: "Men's Shirts",
    price: 999,
    image: shirt1,
  },
  {
    id: 18,
    brand: "Wrogn",
    title: "Slim Fit Solid Casual Shirt",
    description: "wrogn-white-slim-fit-solid-casual-shirt-original",
    category: "Men's Shirts",
    price: 1999,
    image: shirt2,
  },
  {
    id: 19,
    brand: "Snitch",
    title: "Printed Spread Collar Casual Shirt",
    description: "snitch-slim-fit-printed-spread-collar-casual-shirt-original",
    category: "Men's Shirts",
    price: 998,
    image: shirt3,
  },
  {
    id: 20,
    brand: "Rare Rabbit",
    title: "Solid Button Down Collar Casual Shirt",
    description:
      "rarerabbit-slim-fit-solid-buttondown-collar-casual-shirt-original",
    category: "Men's Shirts",
    price: 2099,
    image: shirt4,
  },
  {
    id: 21,
    brand: "Arrow",
    title: "Striped Spread Collar Casual Shirt",
    description: "arrow-slim-fit-striped-spread-collar-casual-shirt-original",
    category: "Men's Shirts",
    price: 1199,
    image: shirt5,
  },
];
