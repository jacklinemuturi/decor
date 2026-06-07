const products = [
  {
    name: "Modern Table Lamp",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description: "Elegant bedside lamp for modern interiors.",
    link: "YOUR_AMAZON_AFFILIATE_LINK_1"
  },

  {
    name: "Decorative Vase",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80",
    description: "Beautiful ceramic vase for home styling.",
    link: "YOUR_AMAZON_AFFILIATE_LINK_2"
  },
{
  name: "Minimalist Luxury Canvas Art",
  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  description: "Minimalist canvas wall art for a clean, high-end interior look.",
  link: "https://www.amazon.com/dp/YOUR_PRODUCT_ID?tag=YOUR_AFFILIATE_TAG"
},
  {
  name: "Kitchen Counter Organizer",
  image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
  description: "save your kitchen space",
  link: "..."
},

{
  name: "Inspirational Office Wall Art",
  image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
  description: "Modern wall art designed to inspire creativity and focus in your office.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},
{
  name: "Decorative Dining Chandelier",
  image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  description: "Beautiful lighting that creates a warm dining experience.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},

{
  category: "Outdoor & Patio",
  name: "Modern Patio Furniture",
  image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  description: "Elegant outdoor seating designed for comfort and style.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},
{
  name: "Modern Wall Mirror Decor",
  image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
  description: "Minimalist mirror designs that enhance light and space in your home.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},
{
  name: "Indoor Plant Decor Set",
  image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=800&q=80",
  description: "Beautiful indoor plants that bring freshness and natural beauty to your space.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},

{
  name: "Garden Decor Collection",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  description: "Beautiful decorative pieces to enhance your garden and outdoor spaces.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},

{
  name: "Modern Luxury Table Decor Set",
  image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=800&q=80",
  description: "Stylish table décor accessories featuring a minimalist luxury design for upscale interiors.",
  link: "https://www.amazon.com/dp/YOUR_PRODUCT_ID?tag=YOUR_AFFILIATE_TAG"
},
 {
  name: "Modern Geometric Carpet",
  category: "Rugs & Carpets",
  image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  description: "Contemporary geometric patterns that complement modern interiors.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},
{
  name: "Cozy Bedroom Rug",
  category: "Rugs & Carpets",
  image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  description: "A plush rug that adds comfort and elegance to your bedroom décor.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},
{
  name: "Boho Living Room Rug",
  category: "Rugs & Carpets",
  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  description: "Stylish bohemian-inspired rug perfect for cozy living rooms.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},

  {
  name: "Modern Study Desk",
  category: "Office",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  description: "A sleek and functional study desk designed for productivity, learning, and modern home offices.",
  link: "YOUR_AMAZON_AFFILIATE_LINK"
},

];

const container = document.getElementById("products-container");

products.forEach(product => {
  const productCard = `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h4>${product.name}</h4>
        <p>${product.description}</p>

        <a
          href="${product.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          View on Amazon
        </a>
      </div>
    </div>
  `;

  container.innerHTML += productCard;
});