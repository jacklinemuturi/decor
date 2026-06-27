const products = [
  {
    name: "Modern Table Lamp",
    image: "https://images.unsplash.com/photo-1573676386604-78f8ed228e2b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant bedside lamp for modern interiors.",
    link: "https://amzn.to/43mRIs7"
  },
  {
    name: "Luxury Modern Curtains",
    image: "https://plus.unsplash.com/premium_photo-1674567530085-4d6333ebe6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxH2h2h3h3h3h3h3h3h3h3h3h3h3h3h3h3",
    description: "Elegant modern curtains designed to enhance privacy and add a soft luxury touch to your living room or bedroom.",
    link: "https://amzn.to/4vE8cs8"
  },
  {
    name: "Minimalist Luxury Canvas Art",
    image: "https://images.unsplash.com/photo-1730342754698-a30ccd879011?w=500&auto=format&fit=crop&q=60",
    description: "Minimalist canvas wall art for a clean, high-end interior look.",
    link: "https://amzn.to/4eqgiP7"
  },
  {
    name: "Kitchen Organization and Storage",
    image: "https://images.unsplash.com/photo-1598305420414-f1b90cd687b4?w=500",
    description: "Kitchen Organization Ideas for a Clutter-Free and Functional Space",
    link: "https://amzn.to/3RakKZv"
  },
  {
    name: "Inspirational Office Wall Art",
    image: "https://images.unsplash.com/photo-1650513737590-4a00deeddc7a?w=500",
    description: "Modern wall art designed to inspire creativity and focus in your office.",
    link: "https://amzn.to/3RUP5eG"
  },
  {
    name: "Decorative Dining Chandelier",
    image: "https://images.unsplash.com/photo-1645217709128-3ca7191704a0?w=500",
    description: "Beautiful lighting that creates a warm dining experience.",
    link: "https://amzn.to/4ok70HY"
  },
  {
    category: "Outdoor & Patio",
    name: "Modern Patio Furniture",
    image: "https://images.unsplash.com/photo-1600210492090-a159ffa3aeaf?w=500",
    description: "Elegant outdoor seating designed for comfort and style.",
    link: "https://amzn.to/4g6KoZc"
  },
  {
    name: "Modern Wall Mirror Decor",
    image: "https://images.unsplash.com/photo-1767331290389-97d2ae0f1890?w=500",
    description: "Minimalist mirror designs that enhance light and space in your home.",
    link: "https://amzn.to/4uYK4R5"
  },
  {
    name: "Indoor Plant Decor Set",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800",
    description: "Beautiful indoor plants that bring freshness and natural beauty to your space.",
    link: "https://amzn.to/49N6oEJ"
  },
  {
    name: "Modern Luxury Table Decor",
    image: "https://images.unsplash.com/photo-1751998816160-0bdb329a3b9f?w=500",
    description: "Elegant modern table décor set designed to elevate your living room, dining table, or office space with a luxury aesthetic.",
    link: "https://amzn.to/4oeufmo"
  },
  {
    name: "Luxury Ceramic Flower Vase",
    image: "https://images.unsplash.com/photo-1775007872982-86d8eed6e1c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEx1eHVyeSUyMENlcmFtaWMlMjBGbG93ZXIlMjBWYXNlfGVufDB8fDB8fHww",
    description: "Minimalist luxury ceramic vase designed for dried flowers, pampas grass, or fresh floral arrangements.",
    link: "https://amzn.to/4unR4pl"
  },
  {
    name: "Modern Geometric Carpet",
    category: "Rugs & Carpets",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500",
    description: "Contemporary geometric patterns that complement modern interiors.",
    link: "https://amzn.to/3PKSzQo"
  },
  {
    name: "Cozy Bedroom Rug",
    category: "Rugs & Carpets",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500",
    description: "A plush rug that adds comfort and elegance to your bedroom décor.",
    link: "https://amzn.to/4uPXUVE"
  },
  {
    name: "Boho Living Room Rug",
    category: "Rugs & Carpets",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500",
    description: "Stylish bohemian-inspired rug perfect for cozy living rooms.",
    link: "https://amzn.to/4xc8k3u"
  },
  {
    name: "Modern Study Desk",
    category: "Office",
    image: "https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?w=500",
    description: "Modern study desk designed for productivity and organized workspaces.",
    link: "https://amzn.to/4fxFTXn"
  },
  {
    name: "Stylish throw pillows",
    category: "livingroom",
    image: "https://images.unsplash.com/photo-1559235335-5618786599e4?w=500",
    description: "Stylish throw pillows that add comfort, texture, and elegance to any space.",
    link: "https://amzn.to/4oEV1ow"
  }
];

/* CLICK TRACKING */
function trackAmazonClick(productName) {
  if (typeof gtag !== "undefined") {
    gtag('event', 'amazon_click', {
      event_category: 'affiliate',
      event_label: productName
    });
  }

  console.log("Clicked:", productName);
}

/* RENDER PRODUCTS */
const container = document.getElementById("products-container");

let output = "";

products.forEach(product => {
  output += `
    <div class="product">

      <div class="image-container">
        <img src="${product.image}" alt="${product.name}">

      <div class="image-overlay">
  <h4>${product.name}</h4>
  <p>${(product.description || "").substring(0, 80)}</p>
</div>
      </div>

      <div class="product-info">

        <a
          href="${product.link}"
          target="_blank"
          rel="nofollow sponsored"
          class="btn amazon-btn"
          onclick="trackAmazonClick('${product.name}')"
        >
          Buy on Amazon
        </a>

      </div>

    </div>
  `;
});

container.innerHTML = output;