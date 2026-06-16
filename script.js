const products = [
  {
    name: "Modern Table Lamp",
    image: "https://images.unsplash.com/photo-1573676386604-78f8ed228e2b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant bedside lamp for modern interiors.",
    link: "https://amzn.to/43mRIs7"
  },

{
  name: "Luxury Modern Curtains",
  image: "https://plus.unsplash.com/premium_photo-1674567530085-4d6333ebe6e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEx1eHVyeSUyME1vZGVybiUyMEN1cnRhaW5zfGVufDB8fDB8fHww",
  description: "Elegant modern curtains designed to enhance privacy and add a soft luxury touch to your living room or bedroom.",
  link: "https://amzn.to/4vE8cs8"
},
{
  name: "Minimalist Luxury Canvas Art",
  image: "https://images.unsplash.com/photo-1730342754698-a30ccd879011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluaW1hbGlzdCUyMEx1eHVyeSUyMENhbnZhcyUyMEFydHxlbnwwfHwwfHx8MA%3D%3D",
  description: "Minimalist canvas wall art for a clean, high-end interior look.",
  link: "https://amzn.to/4eqgiP7"
},
  {
  name: "Kitchen Counter Organizer",
  image: "https://images.unsplash.com/photo-1598305420414-f1b90cd687b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEtpdGNoZW4lMjBDb3VudGVyJTIwT3JnYW5pemVyfGVufDB8fDB8fHww",
  description: "save your kitchen space",
  link: "https://amzn.to/4e4zwKd"
},

{
  name: "Inspirational Office Wall Art",
  image: "https://images.unsplash.com/photo-1650513737590-4a00deeddc7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5zcGlyYXRpb25hbCUyME9mZmljZSUyMFdhbGwlMjBBcnR8ZW58MHx8MHx8fDA%3D",
  description: "Modern wall art designed to inspire creativity and focus in your office.",
  link: "https://amzn.to/3RUP5eG"
},
{
  name: "Decorative Dining Chandelier",
  image: "https://images.unsplash.com/photo-1645217709128-3ca7191704a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGRpbmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
  description: "Beautiful lighting that creates a warm dining experience.",
  link: "https://amzn.to/4ok70HY"
},

{
  category: "Outdoor & Patio",
  name: "Modern Patio Furniture",
  image: "https://images.unsplash.com/photo-1600210492090-a159ffa3aeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZXJuJTIwUGF0aW8lMjBGdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D",
  description: "Elegant outdoor seating designed for comfort and style.",
  link: "https://amzn.to/4g6KoZc"
},
{
  name: "Modern Wall Mirror Decor",
  image: "https://images.unsplash.com/photo-1767331290389-97d2ae0f1890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9kZXJuJTIwV2FsbCUyME1pcnJvciUyMERlY29yfGVufDB8fDB8fHww",
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
  image: "https://images.unsplash.com/photo-1751998816160-0bdb329a3b9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1vZGVybiUyMEx1eHVyeSUyMFRhYmxlJTIwRGVjb3IlMjBTZXR8ZW58MHx8MHx8fDA%3D",
  description: "Elegant modern table décor set designed to elevate your living room, dining table, or office space with a luxury aesthetic.",
  link: "https://amzn.to/4oeufmo"
},
{
  name: "Luxury Ceramic Flower Vase",
  image: "https://media.istockphoto.com/id/1477389561/photo/young-woman-arranging-flowers-and-putting-them-in-a-vase.webp?a=1&b=1&s=612x612&w=0&k=20&c=dTB3i_MSHcizd65VvISMuHef5eMQSM4OfWLQEsmaUHI=",
  description: "Minimalist luxury ceramic vase designed for dried flowers, pampas grass, or fresh floral arrangements.",
  link: "https://amzn.to/4unR4pl"
},
 {
  name: "Modern Geometric Carpet",
  category: "Rugs & Carpets",
  image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJ1Z3xlbnwwfHwwfHx8MA%3D%3D",
  description: "Contemporary geometric patterns that complement modern interiors.",
  link: "https://amzn.to/3PKSzQo"
},
{
  name: "Cozy Bedroom Rug",
  category: "Rugs & Carpets",
  image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q296eSUyMEJlZHJvb20lMjBSdWd8ZW58MHx8MHx8fDA%3D",
  description: "A plush rug that adds comfort and elegance to your bedroom décor.",
  link: "https://amzn.to/4uPXUVE"
},
{
  name: "Boho Living Room Rug",
  category: "Rugs & Carpets",
  image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
  description: "Stylish bohemian-inspired rug perfect for cozy living rooms.",
  link: "https://amzn.to/4xc8k3u"
},

  {
  name: "Modern Study Desk",
  category: "Office",
  image: "https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZXJuJTIwU3R1ZHklMjBEZXNrfGVufDB8fDB8fHww",
  description: "Stylish bohemian-inspired rug perfect for cozy living rooms.",
  link: "https://amzn.to/4fxFTXn"
},

];
function trackAmazonClick(productName) {
  if (typeof gtag !== "undefined") {
    gtag('event', 'amazon_click', {
      event_category: 'affiliate',
      event_label: productName
    });
  }

  console.log("Clicked:", productName);
}
const container = document.getElementById("products-container");

let output = "";

products.forEach(product => {
  output += `
    <div class="product">

      <div class="image-container">
        <img src="${product.image}" alt="${product.name}">

        <div class="image-overlay">
          <h4>${product.name}</h4>
        </div>
      </div>

      <div class="product-info">

        <a
          href="${product.link}"
          target="_blank"
          rel="nofollow sponsored"
          class="btn"
          onclick="trackAmazonClick('${product.name}')"
        >
           Buy on Amazon
        </a>

      </div>

    </div>
  `;
});
container.innerHTML = output;