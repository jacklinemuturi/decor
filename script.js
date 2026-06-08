const products = [
  {
    name: "Modern Table Lamp",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description: "Elegant bedside lamp for modern interiors.",
    link: "https://amzn.to/43mRIs7"
  },

{
  name: "Luxury Modern Curtains",
  image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  description: "Elegant modern curtains designed to enhance privacy and add a soft luxury touch to your living room or bedroom.",
  link: "https://amzn.to/4vE8cs8"
},
{
  name: "Minimalist Luxury Canvas Art",
  image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "Minimalist canvas wall art for a clean, high-end interior look.",
  link: "https://amzn.to/4eqgiP7"
},
  {
  name: "Kitchen Counter Organizer",
  image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
  description: "save your kitchen space",
  link: "https://amzn.to/4e4zwKd"
},

{
  name: "Inspirational Office Wall Art",
  image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
  description: "Modern wall art designed to inspire creativity and focus in your office.",
  link: "https://amzn.to/3RUP5eG"
},
{
  name: "Decorative Dining Chandelier",
  image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  description: "Beautiful lighting that creates a warm dining experience.",
  link: "https://amzn.to/4ok70HY"
},

{
  category: "Outdoor & Patio",
  name: "Modern Patio Furniture",
  image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  description: "Elegant outdoor seating designed for comfort and style.",
  link: "https://amzn.to/4g6KoZc"
},
{
  name: "Modern Wall Mirror Decor",
  image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
  description: "Minimalist mirror designs that enhance light and space in your home.",
  link: "https://amzn.to/4uYK4R5"
},
{
  name: "Indoor Plant Decor Set",
  image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=800&q=80",
  description: "Beautiful indoor plants that bring freshness and natural beauty to your space.",
  link: "https://amzn.to/49N6oEJ"
},
{
  name: "Modern Luxury Table Decor Set",
  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  description: "Elegant modern table décor set designed to elevate your living room, dining table, or office space with a luxury aesthetic.",
  link: "https://amzn.to/4oeufmo"
},
{
  name: "Luxury Ceramic Flower Vase",
  image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
  description: "Minimalist luxury ceramic vase designed for dried flowers, pampas grass, or fresh floral arrangements.",
  link: "https://amzn.to/4unR4pl"
},
 {
  name: "Modern Geometric Carpet",
  category: "Rugs & Carpets",
  image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
  description: "Contemporary geometric patterns that complement modern interiors.",
  link: "https://amzn.to/3PKSzQo"
},
{
  name: "Cozy Bedroom Rug",
  category: "Rugs & Carpets",
  image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "A plush rug that adds comfort and elegance to your bedroom décor.",
  link: "https://amzn.to/4uPXUVE"
},
{
  name: "Boho Living Room Rug",
  category: "Rugs & Carpets",
  image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "Stylish bohemian-inspired rug perfect for cozy living rooms.",
  link: "https://amzn.to/4xc8k3u"
},

  {
  name: "Modern Study Desk",
  category: "Office",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  description: "A sleek and functional study desk designed for productivity, learning, and modern home offices.",
  link: "https://amzn.to/4fxFTXn"
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