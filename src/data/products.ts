import { Product } from "@/types";

// --- IMAGE HELPERS ---
// Using verified high-resolution Unsplash photo IDs for island boutique fashion & treasures
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80`;

const uThumb = (id: string) =>
  `https://images.unsplash.com/${id}?w=200&q=80`;

// ═══════════════════════════════════════════════════════
// WOMEN'S APPAREL (14 products)
// ═══════════════════════════════════════════════════════
const women: Product[] = [
  {
    id: "w1", slug: "tropical-linen-dress",
    name: "Tropical Breeze Linen Dress",
    price: 89.99, compareAtPrice: 120, category: "women", subcategory: "dresses",
    description: "Float through paradise in this airy, hand-embroidered linen dress. Relaxed silhouette with delicate palm embroidery — perfect for sunset dinners or strolling the boardwalk.",
    story: "Inspired by the trade winds of the Caribbean. Each piece is crafted by artisans in Bali using traditional techniques.",
    images: [
      { src: u("photo-1595777457583-95e059d581b8"), alt: "Woman in tropical linen dress at sunset" },
      { src: u("photo-1572804013309-59a88b7e92f1"), alt: "Dress fabric detail" },
      { src: u("photo-1515886657613-9f3515b0c78f"), alt: "Back view of dress" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true },
      { id: "xl", name: "XL", type: "size", value: "XL", available: false },
      { id: "white", name: "Pearl White", type: "color", value: "Pearl White", hex: "#FAF8F5", available: true },
      { id: "ocean", name: "Ocean Blue", type: "color", value: "Ocean Blue", hex: "#1B6B93", available: true },
      { id: "coral", name: "Coral", type: "color", value: "Coral", hex: "#FF7F50", available: true }
    ],
    rating: 4.8, reviewCount: 124, inStock: true, isNew: true, isTrending: true,
    tags: ["dress", "linen", "summer", "tropical", "bestseller"],
    bundles: [{ id: "b1", title: "Complete Island Look", discount: 15, products: [{ productId: "w1", name: "Tropical Breeze Linen Dress", price: 89.99, image: uThumb("photo-1595777457583-95e059d581b8") }, { productId: "j1", name: "Golden Sands Pendant", price: 64.99, image: uThumb("photo-1599643478518-a86aa19234b7") }, { productId: "a1", name: "Woven Palm Sun Hat", price: 45, image: uThumb("photo-1529958030586-3aae4ca485ff") }] }],
    completeTheLook: [{ productId: "j1", name: "Golden Sands Pendant", price: 64.99, image: uThumb("photo-1599643478518-a86aa19234b7"), description: "Layer with this stunning gold pendant" }, { productId: "w2", name: "Island Dream Woven Sandals", price: 59.99, image: uThumb("photo-1543163521-1bf539c55dd2"), description: "Pair with handwoven sandals" }],
    reviews: [{ id: "r1", author: "Sophia M.", avatar: "https://i.pravatar.cc/150?img=47", rating: 5, date: "2026-06-15", title: "Absolutely stunning!", body: "Wore this to a beach wedding and got so many compliments." }],
    viewCount: 42, recentPurchaseCount: 8,
  },
  {
    id: "w2", slug: "island-dream-woven-sandals",
    name: "Island Dream Woven Sandals",
    price: 59.99, category: "women", subcategory: "shoes",
    description: "Hand-stitched leather sandals with intricate woven straps and a cushioned cork footbed. Old-world craftsmanship meets all-day comfort.",
    story: "Made in a small workshop in Oaxaca, Mexico, where families have crafted leather sandals for over a century.",
    images: [
      { src: u("photo-1543163521-1bf539c55dd2"), alt: "Woven sandals at beach" },
      { src: u("photo-1603487742131-4160ec999306"), alt: "Sandal weave detail" }
    ],
    variants: [
      { id: "6", name: "Size 6", type: "size", value: "6", available: true },
      { id: "7", name: "Size 7", type: "size", value: "7", available: true },
      { id: "8", name: "Size 8", type: "size", value: "8", available: true },
      { id: "tan", name: "Natural Tan", type: "color", value: "Natural Tan", hex: "#C4A882", available: true }
    ],
    rating: 4.4, reviewCount: 56, inStock: true, isNew: false, isTrending: false,
    tags: ["sandals", "leather", "woven", "shoes", "comfort"],
    reviews: [], viewCount: 22, recentPurchaseCount: 3,
  },
  {
    id: "w3", slug: "coral-reef-wrap-skirt",
    name: "Coral Reef Wrap Skirt",
    price: 52, compareAtPrice: 68, category: "women", subcategory: "skirts",
    description: "Vibrant coral-print wrap skirt in lightweight rayon crepe. Adjustable tie closure flatters every body type.",
    story: "5% of each sale goes to coral reef restoration in the Florida Keys.",
    images: [
      { src: u("photo-1583496661160-fb5886a0aaaa"), alt: "Woman wearing coral wrap skirt" },
      { src: u("photo-1551854838-212c50d4c181"), alt: "Skirt print detail" }
    ],
    variants: [
      { id: "s", name: "Small", type: "size", value: "S", available: true },
      { id: "m", name: "Medium", type: "size", value: "M", available: true },
      { id: "l", name: "Large", type: "size", value: "L", available: true }
    ],
    rating: 4.6, reviewCount: 41, inStock: true, isNew: false, isTrending: true,
    tags: ["skirt", "coral", "wrap", "summer", "eco-friendly"],
    reviews: [], viewCount: 31, recentPurchaseCount: 2,
  },
  {
    id: "w4", slug: "palm-breeze-wide-leg-pants",
    name: "Palm Breeze Wide-Leg Pants",
    price: 72, category: "women", subcategory: "pants",
    description: "Flowing wide-leg pants in soft Tencel lyocell with a subtle palm-frond jacquard weave. High-waisted with elastic back.",
    story: "The palm jacquard was inspired by vintage Havana postcards from the 1950s.",
    images: [
      { src: u("photo-1509631179647-0177331693ae"), alt: "Woman in wide-leg pants" }
    ],
    variants: [
      { id: "s", name: "Small", type: "size", value: "S", available: true },
      { id: "m", name: "Medium", type: "size", value: "M", available: true },
      { id: "sage", name: "Sage", type: "color", value: "Sage", hex: "#9CAF88", available: true }
    ],
    rating: 4.5, reviewCount: 37, inStock: true, isNew: false, isTrending: false,
    tags: ["pants", "wide-leg", "tencel", "comfort"],
    reviews: [], viewCount: 15, recentPurchaseCount: 1,
  },
  {
    id: "w5", slug: "emerald-wave-kaftan",
    name: "Emerald Wave Kaftan",
    price: 79.99, category: "women", subcategory: "kaftans",
    description: "Flowing emerald-green kaftan in whisper-light chiffon with gold foil wave motifs. Beach to evening elegance.",
    story: "The emerald hue mirrors the deep waters of the Exuma Cays.",
    images: [
      { src: u("photo-1515372039744-b8f02a3ae446"), alt: "Woman in green kaftan" }
    ],
    variants: [
      { id: "onesize", name: "One Size", type: "size", value: "One Size Fits Most", available: true }
    ],
    rating: 4.7, reviewCount: 33, inStock: true, isNew: false, isTrending: false,
    tags: ["kaftan", "coverup", "chiffon", "gold", "beachwear"],
    reviews: [], viewCount: 20, recentPurchaseCount: 2,
  },
  {
    id: "w6", slug: "hibiscus-maxi-dress",
    name: "Hibiscus Sunset Maxi Dress",
    price: 95, compareAtPrice: 125, category: "women", subcategory: "dresses",
    description: "Floor-sweeping maxi dress in a bold hibiscus print. Adjustable spaghetti straps, smocked back, and a dramatic side slit.",
    story: "The print was hand-painted by a Miami artist inspired by her grandmother's Hawaiian garden.",
    images: [
      { src: u("photo-1572804013309-59a88b7e92f1"), alt: "Maxi dress at sunset" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "red", name: "Hibiscus Red", type: "color", value: "Hibiscus Red", hex: "#D41C3D", available: true }
    ],
    rating: 4.9, reviewCount: 78, inStock: true, isNew: true, isTrending: true,
    tags: ["dress", "maxi", "hibiscus", "summer", "bestseller"],
    reviews: [], viewCount: 51, recentPurchaseCount: 11,
  },
  {
    id: "w7", slug: "bali-tie-front-top",
    name: "Bali Tie-Front Top",
    price: 42, category: "women", subcategory: "tops",
    description: "Breathable cotton voile top with a flattering tie-front detail and billowy short sleeves. Pairs perfectly with high-waisted anything.",
    story: "Sewn by a women's cooperative in Ubud, Bali, using traditional hand-batik techniques.",
    images: [
      { src: u("photo-1515886657613-9f3515b0c78f"), alt: "Woman in tie-front top" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "white", name: "White", type: "color", value: "White", hex: "#FFFFFF", available: true }
    ],
    rating: 4.3, reviewCount: 22, inStock: true, isNew: true, isTrending: false,
    tags: ["top", "cotton", "batik", "summer"],
    reviews: [], viewCount: 18, recentPurchaseCount: 4,
  },
  {
    id: "w8", slug: "tropical-romper",
    name: "Paradise Found Romper",
    price: 64, category: "women", subcategory: "rompers",
    description: "One-and-done romper in tropical palm-print rayon. Button-front, self-tie belt, and pockets — because rompers with pockets are everything.",
    story: "Designed for the woman who wants to look put-together in seconds. Just add sandals and go.",
    images: [
      { src: u("photo-1496747611176-843222e1e57c"), alt: "Woman in romper" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "green", name: "Palm Green", type: "color", value: "Palm Green", hex: "#3A7D44", available: true }
    ],
    rating: 4.6, reviewCount: 35, inStock: true, isNew: false, isTrending: true,
    tags: ["romper", "palm", "summer", "easy-wear"],
    reviews: [], viewCount: 29, recentPurchaseCount: 5,
  },
  {
    id: "w9", slug: "key-west-linen-crop-top",
    name: "Key West Linen Crop Top",
    price: 48, category: "women", subcategory: "tops",
    description: "Structure meets airiness in this square-neck cropped linen top with mother-of-pearl button details down the front.",
    story: "Crafted from 100% European flax linen that gets softer with every sunset wash.",
    images: [
      { src: u("photo-1521572267360-ee0c2909d518"), alt: "Linen crop top" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "sand", name: "Sand", type: "color", value: "Sand", hex: "#E8D5B7", available: true }
    ],
    rating: 4.7, reviewCount: 19, inStock: true, isNew: true, isTrending: false,
    tags: ["top", "crop", "linen", "resort"],
    reviews: [], viewCount: 24, recentPurchaseCount: 3,
  },
  {
    id: "w10", slug: "sunset-crochet-coverup",
    name: "Sunset Crochet Beach Cover-up",
    price: 68, compareAtPrice: 85, category: "women", subcategory: "kaftans",
    description: "Hand-crocheted tunic with scalloped hem and tie neckline. Slip over your bikini for instant poolside glamorous relaxation.",
    story: "Handmade by artisans in Tulum using organic unbleached cotton yarn.",
    images: [
      { src: "/images/hero_tropical_resort_wear.jpg", alt: "Sunset Crochet Beach Cover-up" },
      { src: u("photo-1595777457583-95e059d581b8"), alt: "Crochet cover-up detail" }
    ],
    variants: [
      { id: "onesize", name: "One Size", type: "size", value: "One Size", available: true }
    ],
    rating: 4.8, reviewCount: 42, inStock: true, isNew: true, isTrending: true,
    tags: ["crochet", "coverup", "beachwear", "tulum"],
    reviews: [], viewCount: 36, recentPurchaseCount: 6,
  },
  {
    id: "w11", slug: "maui-tiered-sundress",
    name: "Maui Floral Tiered Sundress",
    price: 84, category: "women", subcategory: "dresses",
    description: "Tiered A-line sundress with delicate ruffles and vibrant botanical prints. High waist with elastic smocking.",
    story: "Inspired by the lush botanical gardens of Hana, Maui.",
    images: [
      { src: u("photo-1539109136881-3be0616acf4b"), alt: "Tiered sundress" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true }
    ],
    rating: 4.9, reviewCount: 51, inStock: true, isNew: true, isTrending: true,
    tags: ["dress", "sundress", "floral", "maui"],
    reviews: [], viewCount: 40, recentPurchaseCount: 9,
  },
  {
    id: "w12", slug: "bahamian-linen-shirtdress",
    name: "Bahamian Linen Shirt-Dress",
    price: 88, category: "women", subcategory: "dresses",
    description: "Crisp button-down shirt dress with roll-up sleeves and removable woven belt. Effortless sophistication from day to night.",
    story: "Tailored in Nassau with pure linen dyed in soft ocean hues.",
    images: [
      { src: u("photo-1581044777550-4cfa60707c03"), alt: "Linen shirt dress" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.6, reviewCount: 28, inStock: true, isNew: false, isTrending: false,
    tags: ["dress", "shirtdress", "linen", "bahamas"],
    reviews: [], viewCount: 19, recentPurchaseCount: 4,
  },
  {
    id: "w13", slug: "oahu-palm-printed-set",
    name: "Oahu Palm Printed Two-Piece Set",
    price: 92, compareAtPrice: 115, category: "women", subcategory: "tops",
    description: "Matching top and high-waisted shorts in silky palm-print fabric. Wear together as a faux-jumpsuit or split into endless beach combos.",
    story: "Designed in Honolulu with tropical lifestyle versatility in mind.",
    images: [
      { src: u("photo-1515886657613-9f3515b0c78f"), alt: "Two piece set" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true }
    ],
    rating: 4.7, reviewCount: 39, inStock: true, isNew: true, isTrending: true,
    tags: ["set", "palm", "shorts", "oahu"],
    reviews: [], viewCount: 45, recentPurchaseCount: 7,
  },
  {
    id: "w14", slug: "exuma-off-shoulder-top",
    name: "Exuma Sol Off-the-Shoulder Top",
    price: 45, category: "women", subcategory: "tops",
    description: "Ruffled off-the-shoulder neckline with elastic sleeves and soft smocked bodice. Pairs effortlessly with denim or linen skirts.",
    story: "Named after the crystal clear waters of Exuma Cay.",
    images: [
      { src: u("photo-1502716119720-b23a93e5fe1b"), alt: "Off shoulder top" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.5, reviewCount: 23, inStock: true, isNew: false, isTrending: false,
    tags: ["top", "off-shoulder", "exuma", "boho"],
    reviews: [], viewCount: 21, recentPurchaseCount: 2,
  }
];

// ═══════════════════════════════════════════════════════
// MEN'S STYLE (12 products)
// ═══════════════════════════════════════════════════════
const men: Product[] = [
  {
    id: "m1", slug: "baron-sands-guayabera",
    name: "Baron Sands Linen Guayabera",
    price: 69.99, compareAtPrice: 95, category: "men", subcategory: "shirts",
    description: "The classic Cuban guayabera reimagined in premium washed linen. Four-pocket design with intricate alforza pleating.",
    story: "Named after the legendary Baron Sands rum runner of Key West.",
    images: [
      { src: u("photo-1596755094514-f87e34085b2c"), alt: "Man in linen guayabera" },
      { src: u("photo-1593030761757-71fae45fa0e7"), alt: "Pleating detail" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true },
      { id: "xl", name: "XL", type: "size", value: "XL", available: true },
      { id: "white", name: "White", type: "color", value: "White", hex: "#FFFFFF", available: true },
      { id: "sand", name: "Sand", type: "color", value: "Sand", hex: "#D2B48C", available: true }
    ],
    rating: 4.7, reviewCount: 89, inStock: true, isNew: true, isTrending: true,
    tags: ["men", "linen", "guayabera", "shirt", "tropical"],
    reviews: [{ id: "r4", author: "Carlos V.", avatar: "https://i.pravatar.cc/150?img=12", rating: 5, date: "2026-06-12", title: "Best shirt I own", body: "Perfect for Vegas heat. Already ordered the sand color too." }],
    viewCount: 35, recentPurchaseCount: 6,
  },
  {
    id: "m2", slug: "tradewind-swim-shorts",
    name: "Tradewind Swim Shorts",
    price: 48, category: "men", subcategory: "swimwear",
    description: "Quick-dry swim shorts in a bold tropical leaf print. Mesh lining, elastic waist with drawstring, hidden zip pocket.",
    story: "The palm print was created from impressions pressed in Puerto Rico's El Yunque rainforest.",
    images: [
      { src: "/images/hero_mens_tropical_style.jpg", alt: "Tradewind Swim Shorts" },
      { src: u("photo-1596755094514-f87e34085b2c"), alt: "Swim shorts detail" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.5, reviewCount: 52, inStock: true, isNew: false, isTrending: true,
    tags: ["swimwear", "men", "shorts", "tropical", "summer"],
    reviews: [], viewCount: 41, recentPurchaseCount: 6,
  },
  {
    id: "m3", slug: "manarola-linen-shorts",
    name: "Manarola Linen Shorts",
    price: 55, category: "men", subcategory: "shorts",
    description: "Tailored linen shorts with a relaxed fit. Side slash pockets, back welt pockets, comfortable elastic waistband.",
    story: "Named after the cliffside village of Manarola in Cinque Terre.",
    images: [
      { src: u("photo-1479064555552-3ef4979f8908"), alt: "Man in linen shorts" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true },
      { id: "khaki", name: "Khaki", type: "color", value: "Khaki", hex: "#C3B091", available: true }
    ],
    rating: 4.3, reviewCount: 28, inStock: true, isNew: false, isTrending: false,
    tags: ["shorts", "linen", "men", "summer"],
    reviews: [], viewCount: 13, recentPurchaseCount: 2,
  },
  {
    id: "m4", slug: "island-polo",
    name: "Palm Court Polo",
    price: 58, category: "men", subcategory: "polos",
    description: "Elevated performance polo in moisture-wicking pique with a subtle palm embroidery on the chest. Looks sharp at the clubhouse or beach bar.",
    story: "Woven from recycled ocean plastics — each shirt removes 5 bottles from the sea.",
    images: [
      { src: u("photo-1617137968427-85924c800a22"), alt: "Man in polo" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.5, reviewCount: 44, inStock: true, isNew: true, isTrending: false,
    tags: ["polo", "men", "sustainable", "resort"],
    reviews: [], viewCount: 19, recentPurchaseCount: 3,
  },
  {
    id: "m5", slug: "kanoa-linen-pants",
    name: "Kanoa Linen Drawstring Pants",
    price: 62, category: "men", subcategory: "pants",
    description: "Relaxed-fit linen pants with an elastic drawstring waist. Tapered leg keeps them looking polished even when you're on island time.",
    story: "Named after the Hawaiian word for 'the free one.' Made in small batches in Oahu.",
    images: [
      { src: u("photo-1506629082955-511b1aa562c8"), alt: "Man in linen pants" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true },
      { id: "cream", name: "Cream", type: "color", value: "Cream", hex: "#F5F0E1", available: true }
    ],
    rating: 4.4, reviewCount: 19, inStock: true, isNew: false, isTrending: false,
    tags: ["pants", "linen", "men", "resort"],
    reviews: [], viewCount: 11, recentPurchaseCount: 1,
  },
  {
    id: "m6", slug: "reef-runner-tank",
    name: "Reef Runner Slub Tank",
    price: 32, category: "men", subcategory: "tanks",
    description: "Muscle tank in slub cotton with a vintage-inspired 'Island Vibe' graphic. Perfect for gym, beach, or layering.",
    story: "Each tank is garment-dyed for a lived-in look that gets better with every wash.",
    images: [
      { src: u("photo-1503342217505-b0a15ec3261c"), alt: "Man in tank" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.2, reviewCount: 31, inStock: true, isNew: false, isTrending: false,
    tags: ["tank", "men", "slub-cotton", "casual"],
    reviews: [], viewCount: 14, recentPurchaseCount: 2,
  },
  {
    id: "m7", slug: "tidal-cotton-button-down",
    name: "Tidal Cotton Button-Down",
    price: 55, compareAtPrice: 72, category: "men", subcategory: "shirts",
    description: "Lightweight cotton button-down in a micro-palm print. Spread collar, chest pocket, and a curved hem.",
    story: "Designed by a surf photographer who wanted a shirt that transitions from board meeting to boardwalk.",
    images: [
      { src: u("photo-1602810318383-e386cc2a3ccf"), alt: "Man in button-down" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.6, reviewCount: 62, inStock: true, isNew: true, isTrending: true,
    tags: ["shirt", "button-down", "cotton", "men"],
    reviews: [], viewCount: 38, recentPurchaseCount: 9,
  },
  {
    id: "m8", slug: "cuban-sol-resort-shirt",
    name: "Cuban Sol Camp Collar Shirt",
    price: 64, category: "men", subcategory: "shirts",
    description: "Relaxed camp collar short-sleeve shirt in a vintage botanical print. Breathable silk-cotton blend.",
    story: "Inspired by 1940s Havana resort culture.",
    images: [
      { src: u("photo-1598033129183-c4f50c736f10"), alt: "Resort shirt" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "xl", name: "XL", type: "size", value: "XL", available: true }
    ],
    rating: 4.8, reviewCount: 47, inStock: true, isNew: true, isTrending: true,
    tags: ["shirt", "camp-collar", "resort", "cuban"],
    reviews: [], viewCount: 42, recentPurchaseCount: 8,
  },
  {
    id: "m9", slug: "oahu-embroidered-shirt",
    name: "Oahu Embroidered Palm Shirt",
    price: 74, compareAtPrice: 90, category: "men", subcategory: "shirts",
    description: "Premium linen shirt featuring tonal palm tree embroidery across the chest and back yoke.",
    story: "Hand-embroidered by master craftsmen in Honolulu.",
    images: [
      { src: u("photo-1596755094514-f87e34085b2c"), alt: "Embroidered palm shirt" }
    ],
    variants: [
      { id: "s", name: "S", type: "size", value: "S", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.9, reviewCount: 34, inStock: true, isNew: true, isTrending: true,
    tags: ["linen", "embroidered", "oahu", "bestseller"],
    reviews: [], viewCount: 39, recentPurchaseCount: 7,
  },
  {
    id: "m10", slug: "key-largo-linen-blazer",
    name: "Key Largo Unstructured Linen Blazer",
    price: 135, compareAtPrice: 160, category: "men", subcategory: "shirts",
    description: "Unstructured tropical linen blazer. Lightweight and unlined for breezy sunset dinners and wedding receptions.",
    story: "The ultimate tropical formalwear solution for warm weather events.",
    images: [
      { src: u("photo-1507679799987-c73779587ccf"), alt: "Linen blazer" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.7, reviewCount: 26, inStock: true, isNew: true, isTrending: false,
    tags: ["blazer", "linen", "key-largo", "formal"],
    reviews: [], viewCount: 28, recentPurchaseCount: 4,
  },
  {
    id: "m11", slug: "sunset-cove-chino-shorts",
    name: "Sunset Cove Stretch Chino Shorts",
    price: 49.99, category: "men", subcategory: "shorts",
    description: "7-inch inseam tailored stretch cotton shorts with coconut shell button closure.",
    story: "Designed to handle long days of island exploring and cocktail hours.",
    images: [
      { src: u("photo-1479064555552-3ef4979f8908"), alt: "Chino shorts" }
    ],
    variants: [
      { id: "32", name: "32", type: "size", value: "32", available: true },
      { id: "34", name: "34", type: "size", value: "34", available: true }
    ],
    rating: 4.4, reviewCount: 38, inStock: true, isNew: false, isTrending: false,
    tags: ["shorts", "chino", "stretch", "casual"],
    reviews: [], viewCount: 22, recentPurchaseCount: 3,
  },
  {
    id: "m12", slug: "exuma-wave-boardshorts",
    name: "Exuma Wave Performance Boardshorts",
    price: 54, category: "men", subcategory: "swimwear",
    description: "4-way stretch water-repellent boardshorts with seamless inner thigh to prevent chafing.",
    story: "Tested in the surf line of Eleuthera Island.",
    images: [
      { src: "/images/hero_mens_tropical_style.jpg", alt: "Exuma Wave Performance Boardshorts" },
      { src: u("photo-1596755094514-f87e34085b2c"), alt: "Boardshorts detail" }
    ],
    variants: [
      { id: "m", name: "M", type: "size", value: "M", available: true },
      { id: "l", name: "L", type: "size", value: "L", available: true }
    ],
    rating: 4.6, reviewCount: 41, inStock: true, isNew: false, isTrending: true,
    tags: ["boardshorts", "swimwear", "surf", "exuma"],
    reviews: [], viewCount: 30, recentPurchaseCount: 5,
  }
];

// ═══════════════════════════════════════════════════════
// JEWELRY (12 products)
// ═══════════════════════════════════════════════════════
const jewelry: Product[] = [
  {
    id: "j1", slug: "golden-sands-pendant",
    name: "Golden Sands Pendant Necklace",
    price: 64.99, category: "jewelry", subcategory: "necklaces",
    description: "18k gold-plated pendant with genuine mother-of-pearl inlay set in a wave-inspired frame.",
    story: "Each pendant is hand-finished by master jewelers inspired by sunlight dancing on Bahamian waters.",
    images: [
      { src: u("photo-1599643478518-a86aa19234b7"), alt: "Gold pendant" },
      { src: u("photo-1602173574767-37ac01994b2a"), alt: "Pendant detail" }
    ],
    variants: [
      { id: "18", name: '18" Chain', type: "size", value: '18"', available: true },
      { id: "gold", name: "Yellow Gold", type: "material", value: "18k Yellow Gold Plated", available: true }
    ],
    rating: 4.9, reviewCount: 203, inStock: true, isNew: false, isTrending: true,
    tags: ["necklace", "gold", "mother-of-pearl", "pendant", "bestseller"],
    reviews: [{ id: "r6", author: "Aria K.", avatar: "https://i.pravatar.cc/150?img=23", rating: 5, date: "2026-07-01", title: "My favorite necklace ever", body: "The mother-of-pearl catches light so beautifully." }],
    viewCount: 67, recentPurchaseCount: 12,
  },
  {
    id: "j2", slug: "turquoise-statement-earrings",
    name: "Turquoise Statement Earrings",
    price: 78, compareAtPrice: 98, category: "jewelry", subcategory: "earrings",
    description: "Hand-set turquoise earrings in sterling silver bezels. Lightweight with brilliant robin's-egg blue hue.",
    story: "Sourced from Arizona's Sleeping Beauty mine. Set by Navajo-inspired silversmiths.",
    images: [
      { src: u("photo-1535632066927-ab7c9ab60908"), alt: "Turquoise earrings" },
      { src: u("photo-1600721391776-b5cd0e0048f9"), alt: "Detail" }
    ],
    variants: [
      { id: "sterling", name: "Sterling Silver", type: "material", value: "Sterling Silver", available: true }
    ],
    rating: 4.6, reviewCount: 67, inStock: true, isNew: false, isTrending: true,
    tags: ["earrings", "turquoise", "silver", "statement", "bestseller"],
    reviews: [{ id: "r9", author: "Maya L.", avatar: "https://i.pravatar.cc/150?img=5", rating: 5, date: "2026-06-20", title: "Showstoppers!", body: "Wore these to a rooftop party in Vegas and three people asked where I got them." }],
    viewCount: 53, recentPurchaseCount: 7,
  },
  {
    id: "j3", slug: "tidal-wave-beaded-bracelet",
    name: "Tidal Wave Beaded Bracelet",
    price: 34.99, category: "jewelry", subcategory: "bracelets",
    description: "Hand-strung howlite, amazonite, and lava stone beads with sterling silver palm tree charm.",
    story: "Strung by women's cooperatives in Guatemala — each bracelet supports fair-wage employment.",
    images: [
      { src: u("photo-1611591437281-460bfbe1220a"), alt: "Beaded bracelet" }
    ],
    variants: [
      { id: "adj", name: "Adjustable", type: "size", value: "Adjustable", available: true }
    ],
    rating: 4.5, reviewCount: 45, inStock: true, isNew: false, isTrending: false,
    tags: ["bracelet", "beaded", "unisex", "fair-trade"],
    reviews: [], viewCount: 28, recentPurchaseCount: 4,
  },
  {
    id: "j4", slug: "coral-branch-cuff",
    name: "Coral Branch Cuff Bracelet",
    price: 88, category: "jewelry", subcategory: "bracelets",
    description: "Sculptural brass cuff cast from an actual piece of coral. Gold-dipped with a matte satin finish.",
    story: "Every cuff is cast using the lost-wax method. 10% of proceeds support reef conservation.",
    images: [
      { src: u("photo-1573408301185-9146fe634ad0"), alt: "Coral cuff" }
    ],
    variants: [
      { id: "brass", name: "Brass", type: "material", value: "Brass", available: true }
    ],
    rating: 4.8, reviewCount: 31, inStock: true, isNew: true, isTrending: true,
    tags: ["cuff", "brass", "coral", "statement"],
    reviews: [], viewCount: 24, recentPurchaseCount: 5,
  },
  {
    id: "j5", slug: "pearl-drop-earrings",
    name: "South Sea Pearl Drop Earrings",
    price: 120, category: "jewelry", subcategory: "earrings",
    description: "Luminous South Sea cultured pearls suspended from 14k gold-filled French hooks.",
    story: "Pearls sourced from sustainable farms in the Philippines. Hand matched for luster.",
    images: [
      { src: u("photo-1600721391776-b5cd0e0048f9"), alt: "Pearl drop earrings" }
    ],
    variants: [
      { id: "gold", name: "14k Gold-Filled", type: "material", value: "14k Gold-Filled", available: true }
    ],
    rating: 4.9, reviewCount: 44, inStock: true, isNew: false, isTrending: true,
    tags: ["earrings", "pearl", "gold", "elegant"],
    reviews: [], viewCount: 32, recentPurchaseCount: 8,
  },
  {
    id: "j6", slug: "shell-charm-anklet",
    name: "Cowrie Shell Charm Anklet",
    price: 26, category: "jewelry", subcategory: "anklets",
    description: "Delicate gold-plated chain anklet with tiny cowrie shell charms and a single turquoise bead.",
    story: "Inspired by the shell anklets worn by island dancers throughout the Pacific.",
    images: [
      { src: u("photo-1602173574767-37ac01994b2a"), alt: "Shell anklet" }
    ],
    variants: [
      { id: "gold", name: "Gold Plated", type: "material", value: "Gold Plated", available: true }
    ],
    rating: 4.4, reviewCount: 38, inStock: true, isNew: false, isTrending: false,
    tags: ["anklet", "shell", "gold", "beach"],
    reviews: [], viewCount: 16, recentPurchaseCount: 3,
  },
  {
    id: "j7", slug: "tahitian-pearl-ring",
    name: "Tahitian Black Pearl Ring",
    price: 145, category: "jewelry", subcategory: "rings",
    description: "A single Tahitian black pearl set in a hand-forged sterling silver band with peacock overtones.",
    story: "Cultivated in the pristine lagoons of French Polynesia.",
    images: [
      { src: u("photo-1515562141207-7a88fb7ce338"), alt: "Tahitian pearl ring" }
    ],
    variants: [
      { id: "7", name: "Size 7", type: "size", value: "7", available: true }
    ],
    rating: 5.0, reviewCount: 17, inStock: true, isNew: true, isTrending: true,
    tags: ["ring", "pearl", "tahitian", "sterling-silver"],
    reviews: [], viewCount: 21, recentPurchaseCount: 4,
  },
  {
    id: "j8", slug: "sol-coral-choker",
    name: "Sol Coral Gold Choker Necklace",
    price: 72, compareAtPrice: 90, category: "jewelry", subcategory: "necklaces",
    description: "Natural pink sponge coral beads alternating with 18k gold-filled faceted spacers.",
    story: "Handcrafted in Key West with ethically harvested Mediterranean coral.",
    images: [
      { src: "/images/hero_artisan_ocean_jewelry.jpg", alt: "Sol Coral Gold Choker Necklace" },
      { src: u("photo-1535632066927-ab7c9ab60908"), alt: "Coral gold choker detail" }
    ],
    variants: [
      { id: "16", name: '16"', type: "size", value: '16"', available: true }
    ],
    rating: 4.8, reviewCount: 29, inStock: true, isNew: true, isTrending: true,
    tags: ["choker", "coral", "gold", "key-west"],
    reviews: [], viewCount: 37, recentPurchaseCount: 6,
  },
  {
    id: "j9", slug: "sea-glass-pendant",
    name: "Sea Glass Wire-Wrapped Pendant",
    price: 49, category: "jewelry", subcategory: "necklaces",
    description: "Genuine frosted aqua sea glass found on Caribbean beaches, wire-wrapped in sterling silver.",
    story: "Each piece of sea glass is unique, smoothed naturally by ocean waves over decades.",
    images: [
      { src: u("photo-1602173574767-37ac01994b2a"), alt: "Sea glass pendant" }
    ],
    variants: [
      { id: "silver", name: "Sterling Silver", type: "material", value: "Sterling Silver", available: true }
    ],
    rating: 4.7, reviewCount: 35, inStock: true, isNew: false, isTrending: false,
    tags: ["sea-glass", "necklace", "artisan", "unique"],
    reviews: [], viewCount: 31, recentPurchaseCount: 5,
  },
  {
    id: "j10", slug: "palm-leaf-hoops",
    name: "Palm Leaf Gold Hoop Earrings",
    price: 58, category: "jewelry", subcategory: "earrings",
    description: "Intricately carved palm leaf hoops in 18k gold vermeil. Lightweight everyday statement.",
    story: "Designed in Honolulu inspired by majestic Areca palm fronds.",
    images: [
      { src: u("photo-1535632066927-ab7c9ab60908"), alt: "Palm leaf hoop earrings" }
    ],
    variants: [
      { id: "gold", name: "18k Gold Vermeil", type: "material", value: "18k Gold Vermeil", available: true }
    ],
    rating: 4.9, reviewCount: 52, inStock: true, isNew: true, isTrending: true,
    tags: ["hoops", "gold", "palm", "earrings"],
    reviews: [], viewCount: 48, recentPurchaseCount: 10,
  },
  {
    id: "j11", slug: "turquoise-inlay-ring",
    name: "Artisan Turquoise Inlay Band Ring",
    price: 82, category: "jewelry", subcategory: "rings",
    description: "Solid sterling silver band inlaid with vibrant compressed blue turquoise and copper veins.",
    story: "Master crafted by silversmiths in Santa Fe.",
    images: [
      { src: u("photo-1515562141207-7a88fb7ce338"), alt: "Turquoise inlay ring" }
    ],
    variants: [
      { id: "8", name: "Size 8", type: "size", value: "8", available: true }
    ],
    rating: 4.8, reviewCount: 24, inStock: true, isNew: true, isTrending: false,
    tags: ["ring", "turquoise", "silver", "artisan"],
    reviews: [], viewCount: 29, recentPurchaseCount: 4,
  },
  {
    id: "j12", slug: "shell-pearl-layered-necklace",
    name: "Shell & Pearl Layered Set",
    price: 94, compareAtPrice: 120, category: "jewelry", subcategory: "necklaces",
    description: "Two-in-one layered gold necklace featuring a tiny cowrie shell charm and freshwater pearl pendant.",
    story: "Can be worn individually or stacked together for effortless island layered elegance.",
    images: [
      { src: "/images/hero_artisan_ocean_jewelry.jpg", alt: "Shell & Pearl Layered Set" },
      { src: u("photo-1600721391776-b5cd0e0048f9"), alt: "Shell and pearl layered set detail" }
    ],
    variants: [
      { id: "gold", name: "18k Gold Plated", type: "material", value: "18k Gold Plated", available: true }
    ],
    rating: 4.9, reviewCount: 43, inStock: true, isNew: true, isTrending: true,
    tags: ["layered", "necklace", "pearl", "shell"],
    reviews: [], viewCount: 52, recentPurchaseCount: 11,
  }
];

// ═══════════════════════════════════════════════════════
// ACCESSORIES (12 products)
// ═══════════════════════════════════════════════════════
const accessories: Product[] = [
  {
    id: "a1", slug: "woven-palm-sun-hat",
    name: "Woven Palm Sun Hat",
    price: 45, compareAtPrice: 55, category: "accessories", subcategory: "hats",
    description: "Handwoven from sustainably harvested palm leaves. Wide brim, UPF 50+ protection, adjustable inner band, hibiscus ribbon.",
    story: "Woven by generational hat-makers in the Yucatán peninsula.",
    images: [
      { src: u("photo-1529958030586-3aae4ca485ff"), alt: "Palm hat on beach" }
    ],
    variants: [
      { id: "one", name: "Adjustable", type: "size", value: "Adjustable", available: true }
    ],
    rating: 4.7, reviewCount: 83, inStock: true, isNew: false, isTrending: true,
    tags: ["hat", "palm", "sun-protection", "accessory"],
    reviews: [], viewCount: 39, recentPurchaseCount: 5,
  },
  {
    id: "a2", slug: "hibiscus-paradise-silk-scarf",
    name: "Hibiscus Paradise Silk Scarf",
    price: 38, category: "accessories", subcategory: "scarves",
    description: "100% mulberry silk scarf with hand-illustrated tropical hibiscus and palm motif. Wear as headscarf or bag accessory.",
    story: "Botanical illustrations by a Miami artist.",
    images: [
      { src: u("photo-1601924994987-69e26d50dc26"), alt: "Silk scarf" }
    ],
    variants: [
      { id: "one", name: '27" x 27"', type: "size", value: '27" x 27"', available: true }
    ],
    rating: 4.8, reviewCount: 29, inStock: true, isNew: true, isTrending: false,
    tags: ["scarf", "silk", "hibiscus", "accessory"],
    reviews: [], viewCount: 18, recentPurchaseCount: 5,
  },
  {
    id: "a3", slug: "sunset-reef-clutch",
    name: "Sunset Reef Beaded Clutch",
    price: 98, compareAtPrice: 135, category: "accessories", subcategory: "bags",
    description: "Hand-beaded evening clutch with gradient coral-reef pattern. Thousands of glass seed beads create an ombré effect.",
    story: "Requires over 40 hours of meticulous beadwork by artisans in Rajasthan, India.",
    images: [
      { src: u("photo-1566150905458-1bf1fc113f0d"), alt: "Beaded clutch" }
    ],
    variants: [
      { id: "one", name: '8" x 5"', type: "size", value: '8" x 5"', available: true }
    ],
    rating: 4.9, reviewCount: 19, inStock: true, isNew: true, isTrending: true,
    tags: ["clutch", "beaded", "evening", "statement"],
    reviews: [], viewCount: 27, recentPurchaseCount: 3,
  },
  {
    id: "a4", slug: "shell-seeker-tote",
    name: "Shell Seeker Beach Tote",
    price: 42, category: "accessories", subcategory: "bags",
    description: "Oversized woven raffia tote with genuine cowrie shell accents and canvas lining.",
    story: "Handwoven by women artisans in Madagascar using sustainably harvested raffia.",
    images: [
      { src: u("photo-1590874103328-eac38a683ce7"), alt: "Raffia tote" }
    ],
    variants: [
      { id: "one", name: '20" x 14"', type: "size", value: '20" x 14"', available: true }
    ],
    rating: 4.6, reviewCount: 61, inStock: true, isNew: true, isTrending: true,
    tags: ["tote", "beach", "raffia", "shells"],
    reviews: [], viewCount: 34, recentPurchaseCount: 7,
  },
  {
    id: "a5", slug: "bamboo-sunglasses",
    name: "Lagoon Bamboo Sunglasses",
    price: 32, category: "accessories", subcategory: "sunglasses",
    description: "Polarized UV400 lenses set in sustainable bamboo frames. Lightweight and floatable.",
    story: "Bamboo is one of the fastest-renewing resources on earth.",
    images: [
      { src: u("photo-1511499767150-a48a237f0083"), alt: "Bamboo sunglasses" }
    ],
    variants: [
      { id: "tortoise", name: "Tortoise", type: "color", value: "Tortoise", hex: "#8B5E3C", available: true }
    ],
    rating: 4.5, reviewCount: 55, inStock: true, isNew: false, isTrending: false,
    tags: ["sunglasses", "bamboo", "sustainable"],
    reviews: [], viewCount: 25, recentPurchaseCount: 4,
  },
  {
    id: "a6", slug: "palm-print-sarong",
    name: "Palm Print Sarong Wrap",
    price: 28, category: "accessories", subcategory: "sarongs",
    description: "Versatile cotton sarong in a vibrant green palm print. Wear as a skirt, cover-up, or beach towel.",
    story: "Block-printed by hand using carved wooden stamps in Jaipur.",
    images: [
      { src: u("photo-1529958030586-3aae4ca485ff"), alt: "Palm Print Sarong Wrap" },
      { src: u("photo-1590874103328-eac38a683ce7"), alt: "Sarong wrap detail" }
    ],
    variants: [
      { id: "one", name: "One Size", type: "size", value: '68" x 44"', available: true }
    ],
    rating: 4.3, reviewCount: 27, inStock: true, isNew: false, isTrending: false,
    tags: ["sarong", "cotton", "block-print", "versatile"],
    reviews: [], viewCount: 13, recentPurchaseCount: 2,
  },
  {
    id: "a7", slug: "macrame-beach-bag",
    name: "Macramé Cotton Beach Tote",
    price: 55, category: "accessories", subcategory: "bags",
    description: "Hand-knotted cotton macramé tote with a drawstring cotton lining.",
    story: "Made by a collective of single mothers in coastal Ecuador.",
    images: [
      { src: u("photo-1591561954557-26941169b49e"), alt: "Macrame bag" }
    ],
    variants: [
      { id: "natural", name: "Natural", type: "color", value: "Natural", hex: "#E8DCC8", available: true }
    ],
    rating: 4.7, reviewCount: 42, inStock: true, isNew: true, isTrending: true,
    tags: ["bag", "macrame", "beach", "handmade"],
    reviews: [], viewCount: 30, recentPurchaseCount: 6,
  },
  {
    id: "a8", slug: "straw-crossbody-circle-bag",
    name: "Tulum Straw Circle Crossbody Bag",
    price: 49, compareAtPrice: 65, category: "accessories", subcategory: "bags",
    description: "Handwoven ata grass round crossbody bag with genuine leather strap and batik interior print.",
    story: "Handcrafted in East Bali villages using traditional smoking techniques for durable golden finish.",
    images: [
      { src: u("photo-1544816155-12df9643f363"), alt: "Straw circle bag" }
    ],
    variants: [
      { id: "natural", name: "Natural Tan", type: "color", value: "Natural Tan", hex: "#C4A882", available: true }
    ],
    rating: 4.8, reviewCount: 64, inStock: true, isNew: true, isTrending: true,
    tags: ["crossbody", "straw", "circle-bag", "bali"],
    reviews: [], viewCount: 41, recentPurchaseCount: 8,
  },
  {
    id: "a9", slug: "tropical-flora-hair-clip-set",
    name: "Tropical Frangipani Hair Clip Set",
    price: 22, category: "accessories", subcategory: "hair",
    description: "Set of 3 hand-painted plumeria and hibiscus hair clips with gold claw grips.",
    story: "Add an instant splash of tropical blooms to your beach waves.",
    images: [
      { src: "/images/hero_island_boutique_store.jpg", alt: "Tropical Frangipani Hair Clip Set" },
      { src: u("photo-1529958030586-3aae4ca485ff"), alt: "Frangipani hair clip set detail" }
    ],
    variants: [
      { id: "one", name: "3-Pack", type: "size", value: "3-Pack", available: true }
    ],
    rating: 4.6, reviewCount: 31, inStock: true, isNew: false, isTrending: false,
    tags: ["hair", "clips", "flower", "plumeria"],
    reviews: [], viewCount: 22, recentPurchaseCount: 4,
  },
  {
    id: "a10", slug: "seaside-canvas-visor-hat",
    name: "Seaside Roll-Up Sun Visor",
    price: 29.99, category: "accessories", subcategory: "hats",
    description: "Packable roll-up straw visor with wide brim and bow back closure. Fits in your tote easily.",
    story: "Designed for easy travel packing without losing its crisp shape.",
    images: [
      { src: u("photo-1576871337632-b9aef4c17ab9"), alt: "Roll up sun visor" }
    ],
    variants: [
      { id: "one", name: "Adjustable", type: "size", value: "Adjustable", available: true }
    ],
    rating: 4.7, reviewCount: 49, inStock: true, isNew: true, isTrending: true,
    tags: ["visor", "packable", "sun-hat", "travel"],
    reviews: [], viewCount: 33, recentPurchaseCount: 6,
  },
  {
    id: "a11", slug: "hand-poured-resin-comb",
    name: "Ocean Wave Hand-Poured Resin Comb",
    price: 24, category: "accessories", subcategory: "hair",
    description: "Wide-tooth detangling comb hand-poured with blue resin wave swirl effect.",
    story: "Safe for wet hair after a ocean swim or pool dip.",
    images: [
      { src: u("photo-1601924994987-69e26d50dc26"), alt: "Resin ocean comb" }
    ],
    variants: [
      { id: "one", name: "One Size", type: "size", value: "One Size", available: true }
    ],
    rating: 4.5, reviewCount: 18, inStock: true, isNew: false, isTrending: false,
    tags: ["comb", "resin", "wave", "hair"],
    reviews: [], viewCount: 15, recentPurchaseCount: 2,
  },
  {
    id: "a12", slug: "cowrie-shell-keychain",
    name: "Island Spirit Leather Shell Keychain",
    price: 18, category: "accessories", subcategory: "charms",
    description: "Genuine leather keychain with cowrie shell, turquoise tassel, and gold hardware.",
    story: "Bring a small piece of island energy with you everywhere you drive.",
    images: [
      { src: u("photo-1611591437281-460bfbe1220a"), alt: "Leather shell keychain" }
    ],
    variants: [
      { id: "one", name: "One Size", type: "size", value: "One Size", available: true }
    ],
    rating: 4.4, reviewCount: 27, inStock: true, isNew: false, isTrending: false,
    tags: ["keychain", "leather", "shell", "gift"],
    reviews: [], viewCount: 19, recentPurchaseCount: 3,
  }
];

// ═══════════════════════════════════════════════════════
// VACATION ESSENTIALS (10 products)
// ═══════════════════════════════════════════════════════
const vacation: Product[] = [
  {
    id: "v1", slug: "coconut-lime-candle",
    name: "Coconut Lime Artisan Soy Candle",
    price: 28, category: "vacation", subcategory: "home",
    description: "Hand-poured soy wax candle in a reclaimed coconut shell. Notes of fresh coconut, zesty lime, and vanilla bean.",
    story: "Made in small batches in Key West. Coconut shells collected from local restaurants and repurposed.",
    images: [
      { src: u("photo-1603006905003-be475563bc59"), alt: "Coconut candle" }
    ],
    variants: [
      { id: "one", name: "8 oz", type: "size", value: "8 oz", available: true }
    ],
    rating: 4.8, reviewCount: 94, inStock: true, isNew: false, isTrending: true,
    tags: ["candle", "coconut", "home", "gift", "bestseller"],
    reviews: [], viewCount: 37, recentPurchaseCount: 8,
  },
  {
    id: "v2", slug: "island-spice-rum-cake",
    name: "Island Spice Gourmet Rum Cake",
    price: 22, category: "vacation", subcategory: "food",
    description: "Moist Caribbean-style rum cake soaked in aged dark rum and topped with toasted coconut.",
    story: "Based on a family recipe from a grandmother in Barbados.",
    images: [
      { src: u("photo-1578985545062-69928b1d9587"), alt: "Rum cake" }
    ],
    variants: [
      { id: "one", name: "1 lb", type: "size", value: "1 lb", available: true }
    ],
    rating: 4.6, reviewCount: 38, inStock: true, isNew: false, isTrending: false,
    tags: ["food", "rum-cake", "gift", "caribbean"],
    reviews: [], viewCount: 18, recentPurchaseCount: 4,
  },
  {
    id: "v3", slug: "tropical-tea-collection",
    name: "Tropical Organic Tea Collection",
    price: 18, category: "vacation", subcategory: "food",
    description: "Set of 4 loose-leaf tea blends: Mango Passionfruit, Coconut Chai, Pineapple Ginger, and Hibiscus Berry.",
    story: "Blended by a tea sommelier direct from organic family farms in Sri Lanka.",
    images: [
      { src: u("photo-1576092768241-dec231879fc3"), alt: "Tropical tea collection" }
    ],
    variants: [
      { id: "one", name: "20 Sachets", type: "size", value: "20 Sachets", available: true }
    ],
    rating: 4.7, reviewCount: 56, inStock: true, isNew: false, isTrending: false,
    tags: ["tea", "collection", "gift", "organic"],
    reviews: [], viewCount: 19, recentPurchaseCount: 3,
  },
  {
    id: "v4", slug: "beach-blanket",
    name: "Paradise Sand-Proof Beach Blanket",
    price: 35, category: "vacation", subcategory: "beach-gear",
    description: "Oversized 7' x 7' sand-proof beach blanket in vibrant tie-dye pattern. Folds into compact pouch with shoulder strap.",
    story: "Quick-dry microfiber fabric designed to shake sand off instantly.",
    images: [
      { src: u("photo-1507525428034-b723cf961d3e"), alt: "Beach blanket" }
    ],
    variants: [
      { id: "one", name: "7' x 7'", type: "size", value: '7\' x 7\'', available: true }
    ],
    rating: 4.5, reviewCount: 72, inStock: true, isNew: false, isTrending: true,
    tags: ["blanket", "beach", "sand-proof", "travel"],
    reviews: [], viewCount: 44, recentPurchaseCount: 9,
  },
  {
    id: "v5", slug: "tropical-spice-set",
    name: "Island Kitchen Spice Tins Set",
    price: 24, category: "vacation", subcategory: "food",
    description: "Four essential island spice blends in magnetic tins: Jerk Seasoning, Adobo, Curry Powder, and All-Purpose Island Salt.",
    story: "Recipes sourced from home cooks across Jamaica, Puerto Rico, and Trinidad.",
    images: [
      { src: u("photo-1596040033229-a9821ebd058d"), alt: "Spice set" }
    ],
    variants: [
      { id: "one", name: "4 Tins", type: "size", value: "4 Tins", available: true }
    ],
    rating: 4.8, reviewCount: 41, inStock: true, isNew: true, isTrending: false,
    tags: ["spices", "cooking", "gift", "caribbean"],
    reviews: [], viewCount: 16, recentPurchaseCount: 3,
  },
  {
    id: "v6", slug: "waterproof-phone-pouch",
    name: "Lagoon Waterproof Phone Pouch",
    price: 15, category: "vacation", subcategory: "beach-gear",
    description: "IPX8-certified waterproof phone pouch for smartphones up to 6.7\". Take crisp photos underwater. Includes lanyard.",
    story: "Tested in the waters of the Great Barrier Reef.",
    images: [
      { src: u("photo-1544816155-12df9643f363"), alt: "Phone pouch" }
    ],
    variants: [
      { id: "aqua", name: "Aqua", type: "color", value: "Aqua", hex: "#00BCD4", available: true }
    ],
    rating: 4.4, reviewCount: 103, inStock: true, isNew: false, isTrending: false,
    tags: ["waterproof", "phone", "beach", "travel"],
    reviews: [], viewCount: 23, recentPurchaseCount: 5,
  },
  {
    id: "v7", slug: "organic-monoi-body-oil",
    name: "Tahitian Organic Monoi Coconut Body Oil",
    price: 32, category: "vacation", subcategory: "body-care",
    description: "Infused with genuine Tiaré gardenia blossoms in pure Tahitian coconut oil. Deep hydration and divine natural floral scent.",
    story: "Bottled directly in French Polynesia following ancient Polynesian body ritual traditions.",
    images: [
      { src: "/images/hero_island_boutique_store.jpg", alt: "Tahitian Organic Monoi Coconut Body Oil" },
      { src: u("photo-1603006905003-be475563bc59"), alt: "Monoi body oil detail" }
    ],
    variants: [
      { id: "one", name: "4 oz", type: "size", value: "4 oz", available: true }
    ],
    rating: 4.9, reviewCount: 68, inStock: true, isNew: true, isTrending: true,
    tags: ["body-oil", "monoi", "tiare", "tahiti", "skincare"],
    reviews: [], viewCount: 40, recentPurchaseCount: 7,
  },
  {
    id: "v8", slug: "passionfruit-sugar-scrub",
    name: "Tropical Passionfruit Island Sugar Scrub",
    price: 26, category: "vacation", subcategory: "body-care",
    description: "Exfoliating organic cane sugar scrub enriched with passionfruit seed oil and raw shea butter.",
    story: "Formulated in small artisanal batches to reveal glowing, smooth summer skin.",
    images: [
      { src: u("photo-1556228720-195a672e8a03"), alt: "Passionfruit sugar scrub" }
    ],
    variants: [
      { id: "one", name: "10 oz", type: "size", value: "10 oz", available: true }
    ],
    rating: 4.7, reviewCount: 45, inStock: true, isNew: true, isTrending: false,
    tags: ["sugar-scrub", "body-care", "passionfruit", "glowing-skin"],
    reviews: [], viewCount: 28, recentPurchaseCount: 4,
  },
  {
    id: "v9", slug: "island-breeze-room-spray",
    name: "Island Breeze Linen & Room Spray",
    price: 20, category: "vacation", subcategory: "home",
    description: "Natural room mist with essential oils of sea salt, pink grapefruit, and palm fronds. Instantly transforms your home into a tropical resort.",
    story: "Hand-blended in Key West for year-round vacation ambiance.",
    images: [
      { src: u("photo-1603006905003-be475563bc59"), alt: "Linen spray" }
    ],
    variants: [
      { id: "one", name: "6 oz", type: "size", value: "6 oz", available: true }
    ],
    rating: 4.6, reviewCount: 32, inStock: true, isNew: false, isTrending: false,
    tags: ["room-spray", "home", "aromatherapy", "gift"],
    reviews: [], viewCount: 21, recentPurchaseCount: 3,
  },
  {
    id: "v10", slug: "resort-travel-jewelry-case",
    name: "Resort Velvet Travel Jewelry Organizer",
    price: 36, compareAtPrice: 48, category: "vacation", subcategory: "travel",
    description: "Compact plush velvet travel case with anti-tarnish lining, ring rolls, and necklace hooks. Keeps your island jewels safe on the go.",
    story: "Designed specifically to keep delicate pendants and statement earrings organized while traveling.",
    images: [
      { src: u("photo-1566150905458-1bf1fc113f0d"), alt: "Velvet jewelry organizer" }
    ],
    variants: [
      { id: "emerald", name: "Emerald", type: "color", value: "Emerald", hex: "#046307", available: true }
    ],
    rating: 4.9, reviewCount: 57, inStock: true, isNew: true, isTrending: true,
    tags: ["jewelry-case", "travel", "organizer", "gift"],
    reviews: [], viewCount: 39, recentPurchaseCount: 8,
  }
];

// ═══════════════════════════════════════════════════════
// AGGREGATE & EXPORTS
// ═══════════════════════════════════════════════════════
export const products: Product[] = [...women, ...men, ...jewelry, ...accessories, ...vacation];

export const womenProducts = women;
export const menProducts = men;
export const jewelryProducts = jewelry;
export const accessoriesProducts = accessories;
export const vacationProducts = vacation;

export const trendingProducts = products.filter((p) => p.isTrending);
export const newArrivals = products.filter((p) => p.isNew);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.tags.some((t) => product.tags.includes(t))))
    .slice(0, limit);
}
