export interface Product {
  name: string
  description: string
  fullDescription: string
  rating: number
  reviews: number
  price: string
  image: string
  slug: string
  features: string[]
  amazonLink: string
}

export const products: Product[] = [
  {
    name: "ThermoPro TP20 Wireless Meat Thermometer",
    description: "Dual probe digital thermometer with 500ft range",
    fullDescription:
      "The ThermoPro TP20 is a professional-grade wireless meat thermometer that takes the guesswork out of grilling. With dual probes, you can monitor two different meats or check both the meat and grill temperature simultaneously. The 500-foot wireless range lets you move freely while keeping an eye on your cook. Features preset temperatures for various meats and doneness levels, plus a large backlit LCD display for easy reading in any lighting condition.",
    rating: 4.6,
    reviews: 20000,
    price: "$56.99",
    image: "https://m.media-amazon.com/images/I/71Z+2ZB9s7L._AC_SX679_.jpg",
    slug: "thermopro-tp20-wireless-thermometer",
    features: [
      "500FT wireless range",
      "Dual probe technology",
      "Preset temperature settings",
      "Large backlit LCD display",
      "Timer and alarm functions",
      "Heat-resistant probes up to 716°F",
    ],
    amazonLink: "https://www.amazon.com/ThermoPro-Wireless-Digital-Cooking-Thermometer/dp/B01GE77QT0",
  },
  {
    name: "Cuisinart 10-Piece Premium Grilling Set",
    description: "Stainless Steel BBQ Tools with Storage Tote",
    fullDescription:
      "Take over the tailgate with Cuisinart 10-Piece Premium Grilling Set. This beautifully crafted grill tool set is built from durable stainless steel and paired with handcrafted Pakkawood handles. This complete grill tool set includes everything you need to master the grill, featuring a chef’s spatula, tongs, fork, four skewers, a grill brush, and two replacement brush heads. Whether you're grilling steaks, veggies, or skewers, this grill set gives you control. The set stores in a leather tote that’s perfect for on-the-go grilling at tailgates or cookouts.",
    rating: 4.2,
    reviews: 331,
    price: "$62.99",
    image: "https://m.media-amazon.com/images/I/81FULiIy7QL._AC_SX679_.jpg",
    slug: "cuisinart-premium-grilling-set",
    features: [
      "Complete grill set with 10 pieces",
      "Premium stainless steel construction",
      "Pakkawood handles for secure grip",
      "Includes storage tote",
      "Durable for high heat use",
      "Perfect for BBQs and camping",
    ],
    amazonLink: "https://www.amazon.com/Cuisinart-CGS-2010-Premium-Grilling-10-Piece/dp/B003I4DYVC",
  },
  {
    name: "Weber Q Compact Stand",
    description: "Lightweight, durable construction for Weber Q grills",
    fullDescription:
      "Great stand upon which to place a Weber Q-series grill. Easy to assemble and it seems sturdy enough. Sturdy, stable platform. My Weber Q1000 locks in place and fits perfectly. Stand fits the grill well and seems sturdy.",
    rating: 4.7,
    reviews: 62,
    price: "$99.99",
    image: "https://m.media-amazon.com/images/I/61qZ1L+TEfL._AC_SX679_.jpg",
    slug: "weber-q-compact-stand",
    features: [
      "Lightweight, durable construction",
      "Easy to assemble",
      "Secure fit for Q series grills",
      "Stable and sturdy design",
      "Compact for easy storage",
      "Ideal for outdoor grilling",
    ],
    amazonLink: "https://www.amazon.com/Weber-3400262-Q-Compact-Stand/dp/B0D3NC48YF",
  },
  {
    name: "Kona BBQ Grill Mats",
    description: "Non-Stick for Easy Cleanup, Heavy Duty, 600°F, PFOA-Free, Set of 2",
    fullDescription:
      "Elevate your grilling sessions with the Kona Best BBQ Grill Mat! Each mat in this set of two is capable of withstanding up to 600 degrees, facilitating perfect cooking conditions. These premier non-stick mats are engineered in the USA, transforming any grill into a versatile cooking surface. Whether cooking steaks, vegetables, or even delicate items like eggs, these mats provide a clean, even surface for consistent results. Easy to clean and reusable, they're essential for any outdoor cook.",
    rating: 4.4,
    reviews: 21427,
    price: "$19.95",
    image: "https://m.media-amazon.com/images/I/81gDO949HFL._AC_SX679_.jpg",
    slug: "kona-bbq-grill-mats",
    features: [
      "Handles up to 600°F peak temperature for high-heat grilling and smoking",
      "Non-stick PTFE surface, PFOA-free, for easy food release and cleanup",
      "Thick 0.39mm design, providing up to 1,000 uses per side with heavy-duty durability",
      "Set of 2 rectangular mats, dimensions 15.5\"L x 13\"W x 0.35\"Th, suitable for most outdoor grills",
      "Dishwasher safe and easy to clean with soap and water",
      "Designed and tested in the USA with 7-year warranty for safety and reliability",
    ],
    amazonLink: "https://www.amazon.com/Kona-Best-BBQ-Grill-Mat/dp/B00KJVTB96",
  },
  {
    name: "KINGSFORD Heavy Duty Deluxe Charcoal Chimney Starter",
    description: "Bundle with Kingsford Quick Light Fire Starters, 16 Count",
    fullDescription:
      "The Kingsford Heavy Duty Deluxe Charcoal Chimney Starter and Kingsford Quick Light Fire Starters bundle includes two complementary products to help you easily and quickly light charcoal for grilling or campfires. The chimney starter is a 10.74” x 6.8” x 11.25” steel construction that allows you to quickly and evenly light charcoal briquettes without the need for lighter fluid.",
    rating: 5.0,
    reviews: 9,
    price: "$24.38",
    image: "https://m.media-amazon.com/images/I/516SiSI0rxL._AC_SX679_.jpg",
    slug: "kingsford-charcoal-chimney-starter",
    features: [
      "Keep your hands safe when lighting grills with the heat shield and stay-cool handle on this charcoal chimney starter",
      "Light charcoal and firewood with ease using the 16 count fire starter rolls made from 100% FSC-certified natural hardwood",
      "Large 10.74” x 6.8” x 11.25” charcoal chimney starter works well for quick lighting large grills",
      "Durable, rust-resistant zinc steel construction ensures this charcoal chimney starter will be by your side barbecue after barbecue",
      "No assembly required on this charcoal chimney starter that arrives ready for first-time and seasoned grillmasters",
      "Vented base and circular air vents for fast and even lighting of charcoal briquettes without lighter fluid",
    ],
    amazonLink: "https://www.amazon.com/KINGSFORD-Charcoal-Chimney-Kingsford-Starters/dp/B0D2VWWHNF",
  },
  {
    name: "GrillPro 00150 Cast Iron Smoker Box",
    description: "Cast iron smoker box for adding smoke flavor",
    fullDescription:
      "This Grillpro cast iron smoker box is a great accessory for your grill. This box is tough & Durable, It is constructed of cast iron, & gives you a great smoke flavor. Simple construction & easy to use. Sealed design holds liquids to add moisture while smoking.",
    rating: 4.1,
    reviews: 692,
    price: "$18.99",
    image: "https://m.media-amazon.com/images/I/81JSNmzeeXL._AC_SX679_.jpg",
    slug: "grillpro-cast-iron-smoker-box",
    features: [
      "Cast iron construction for durability",
      "Gives great smoke flavor",
      "Simple and easy to use",
      "Sealed design holds liquids for moisture",
      "Dimensions: 5 in L x 8 in W x 1 in D",
      "Ideal for gas or charcoal grills",
    ],
    amazonLink: "https://www.amazon.com/GrillPro-00150-Cast-Iron-Smoker/dp/B000FJG4R4",
  },
  {
    name: "Traeger Hickory All-Natural Pellets",
    description: "100% All-Natural Wood Pellets for Smokers, 18 lb. Bag",
    fullDescription:
      "Traeger Hickory pellets are great for naturally enhancing Beef, Chicken, Pork, and Veggies with full-bodied, bold flavor. No wonder it is staple in BBQ. Experts agree, hardwood is the secret ingredient for robust flavor. Consistent smoke delivery is determined by the quality of your fuel.",
    rating: 4.8,
    reviews: 1000,
    price: "$18.99",
    image: "https://m.media-amazon.com/images/I/719zhEvE-DL._AC_SX679_.jpg",
    slug: "traeger-hickory-pellets",
    features: [
      "100% natural hickory hardwood",
      "No fillers or additives",
      "18lb bag for extended use",
      "Compatible with all pellet grills",
      "Bold, classic BBQ flavor",
      "Food-grade quality",
    ],
    amazonLink: "https://www.amazon.com/Traeger-Hickory-All-Natural-Pellets-Smokers/dp/B0DHJRF9PR",
  },
  {
    name: "GrillTough Heavy Duty BBQ Grill Cover",
    description: "58 Inch Waterproof Cover for Outdoor Grill",
    fullDescription:
      "GrillTough Heavy Duty BBQ Grill Cover for Outdoor Grill – Waterproof, Weather Resistant, UV & Fade Resistant with Adjustable Straps – Gas Grill Cover for Weber, Charbroil (147L x 61W x 122H cm). Crafted with premium fade-resistant polyester fabric and a waterproof vinyl coating for durability against UV rays, rain, tearing, and cold cracking.",
    rating: 4.6,
    reviews: 6807,
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/61It1rphZtL._AC_SX679_.jpg",
    slug: "grilltough-heavy-duty-grill-cover",
    features: [
      "Heavy-duty protection with premium fade-resistant polyester fabric and waterproof vinyl coating for durability against UV rays, rain, tearing, and cold cracking.",
      "Superior durability and weather resistance to protect against rain, sun, snow, and outdoor hazards, with sturdy fastening straps for a snug, wind-resistant fit.",
      "Multiple sizes available from 28 inches to 72 inches, designed to fit various grill brands like Weber, Char-Broil, Nexgrill, and more.",
      "Easy cleaning by hosing down with water to remove dirt and debris, followed by air drying in the sun; ensure grill is completely cool before covering.",
      "Specific dimensions of 58''L x 24''W x 48''H for a tailored fit on compatible outdoor grills.",
      "Constructed with adjustable straps and made from black polyester material for reliable, long-lasting outdoor use.",
    ],
    amazonLink: "https://www.amazon.com/GrillTough-Heavy-Grill-Cover-Outdoor/dp/B0BY7MF25V",
  },
  {
    name: "OXO Good Grips Grilling Tools Basting Brush",
    description: "Heat-resistant silicone bristles with comfortable grip",
    fullDescription:
      "The OXO Good Grips Silicone Basting Brush makes applying marinades, sauces, and butter effortless. Heat-resistant silicone bristles withstand temperatures up to 600°F and won't trap bacteria like traditional bristle brushes. The angled head reaches into tight spaces and provides even coverage. The soft, comfortable non-slip grip stays cool to the touch. Dishwasher safe for easy cleanup.",
    rating: 4.7,
    reviews: 500,
    price: "$12.99",
    image: "https://m.media-amazon.com/images/I/41vy4Heu2QL._AC_SX679_.jpg",
    slug: "oxo-good-grips-basting-brush",
    features: [
      "Heat-resistant to 600°F",
      "Silicone bristles won't trap bacteria",
      "Angled head for easy access",
      "Comfortable non-slip grip",
      "Dishwasher safe",
      "Durable and long-lasting",
    ],
    amazonLink: "https://www.amazon.com/OXO-Grips-Grilling-Tools-Basting/dp/B08R6H289V",
  },
]
