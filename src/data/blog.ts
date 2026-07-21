export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
  tags: string[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "how-to-style-resort-linen-for-evening",
    title: "From Boardwalk to Rooftop Bar: How to Style Pure Linen Resort Wear",
    excerpt: "Linen is the undisputed crown jewel of summer fabrics. Learn how to elevate hand-embroidered linen dresses and guayaberas from day beach outings to sophisticated evening nights out.",
    category: "Style Guide",
    author: {
      name: "Maria Santos",
      role: "Founder & Creative Director",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    date: "July 18, 2026",
    readTime: "5 min read",
    image: "/images/hero_tropical_resort_wear.jpg",
    featured: true,
    tags: ["linen", "resortwear", "styling", "eveningwear", "vacation"],
    relatedSlugs: ["ocean-jewelry-mother-of-pearl-care", "mens-guayabera-history-and-fit", "tropic-vacation-packing-checklist"],
    content: [
      "Linen has earned its reputation as the ultimate warm-weather luxury fabric. Its lightweight breathability and distinct, textured drape make it uniquely comfortable whether you are strolling a sunlit boardwalk or dining under starlit tropical skies.",
      "However, many travelers wonder: how do you transition a relaxed linen dress or guayabera from a casual daytime cover-up to an elegant evening ensemble?",
      "### 1. Elevate with Ocean-Inspired Jewelry",
      "During daytime hours, pair your linen gown with simple bamboo sunglasses and flat leather sandals. When golden hour hits, transform your look instantly by layering warm 18k gold mother-of-pearl pendants or statement turquoise earrings.",
      "The iridescent luster of natural mother-of-pearl catches candlelight beautifully, adding refined glamour to soft white or coral linen without feeling overly formal.",
      "### 2. Tailor the Footwear",
      "Footwear sets the tone for your entire outfit. Transition from woven cork-soled slides during the afternoon to sleek metallic block heels or handcrafted leather straps for dinner. For men, swapping casual flip-flops for un-tucked linen guayaberas over tailored linen trousers and leather loafers creates an effortless 'Tropical Gentleman' aesthetic.",
      "### 3. Embrace Natural Structure with Handwoven Bags",
      "Leave heavy leather totes at your resort. A structured woven raffia clutch or beaded macramé handbag adds tactile warmth and bohemian sophistication while maintaining that breezy island spirit.",
      "### 4. The Secret to Wrinkle Management",
      "Embrace the gentle, natural crinkle of pure linen — it is part of its authentic artisanal charm! However, for crisp evening dinners, hanging your linen garment in a steamed bathroom while you shower will naturally release heavy travel creases without needing an iron."
    ]
  },
  {
    id: "b2",
    slug: "ocean-jewelry-mother-of-pearl-care",
    title: "Caring for Your Mother-of-Pearl & 18k Gold Island Jewelry",
    excerpt: "Keep your handcrafted gold pendants, sea glass, and Sleeping Beauty turquoise glowing for years with our master jeweler's easy maintenance and cleaning routine.",
    category: "Jewelry Care",
    author: {
      name: "Elena Rostova",
      role: "Master Jeweler & Gemologist",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    date: "July 12, 2026",
    readTime: "4 min read",
    image: "/images/hero_artisan_ocean_jewelry.jpg",
    tags: ["jewelry", "mother-of-pearl", "turquoise", "gold", "care-guide"],
    relatedSlugs: ["how-to-style-resort-linen-for-evening", "secrets-of-rare-sea-glass-origins-and-care", "sustainable-island-artisan-craftsmanship"],
    content: [
      "Handcrafted ocean jewelry carries the energy and beauty of the sea. From natural iridescent mother-of-pearl shells to Sleeping Beauty turquoise and 18k gold plating, proper care ensures your treasured pieces remain as luminous as the day you acquired them.",
      "### Understanding Natural Mother-of-Pearl & Pearls",
      "Mother-of-pearl and cultured pearls are organic gems produced by living mollusks. Because their outer nacre layer is soft and porous, they require gentle care compared to hard gemstones.",
      "**Golden Rule:** Apply your body lotions, sunscreen, and perfumes *before* putting on your jewelry. Chemicals in sprays can dull the natural iridescence over time.",
      "### Cleaning Turquoise & Coral",
      "Natural turquoise is a porous stone that can absorb oils or harsh soapy water. To clean turquoise or pink sponge coral pieces:",
      "- Wipe gently with a soft, dry micro-fiber cloth after wearing.",
      "- Avoid submerging turquoise in liquid jewelry cleaners or ultrasonic tanks.",
      "- Store turquoise pieces away from direct heat or prolonged sunlight.",
      "### Preserving 18k Gold Plating & Sterling Silver",
      "All Island Vibe Treasures gold pieces feature extra-thick 18k gold plating over hypoallergenic brass or sterling silver, sealed with an anti-tarnish protective lacquer. To maintain its warm radiant finish, store each piece in your anti-tarnish velvet pouch when traveling."
    ]
  },
  {
    id: "b3",
    slug: "las-vegas-hidden-tropical-spots",
    title: "Stepping Out of the Desert Heat: Top Tropical Oases in Las Vegas",
    excerpt: "Visiting Las Vegas? Beyond our flagship Paradise Road boutique, discover the most lush secret gardens, rooftop pools, and island tiki bars across the city.",
    category: "Vegas Travel",
    author: {
      name: "Carlos Santos",
      role: "Co-Founder & Vegas Local",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    date: "June 28, 2026",
    readTime: "6 min read",
    image: "/images/hero_island_boutique_store.jpg",
    tags: ["las-vegas", "travel", "boutique", "tiki", "vacation"],
    relatedSlugs: ["destination-las-vegas-story-of-island-vibe-treasures", "how-to-style-resort-linen-for-evening", "tropic-vacation-packing-checklist"],
    content: [
      "Las Vegas is world-famous for neon lights and desert heat, but hidden right beneath the surface lies a vibrant world of tropical oases, lush botanical gardens, and exotic island lounges.",
      "Whether you are a Vegas local or visiting for a weekend escape, here are our favorite spots to experience authentic island vibes:",
      "### 1. Island Vibe Treasures Flagship Boutique (Paradise Road)",
      "Start your day by stepping out of the desert sun into our Paradise Road sanctuary. Surrounded by indoor palm fronds, gentle tropical music, and complimentary coconut refreshments, you can browse handwoven hats, 100% linen dresses, and gold shell jewelry.",
      "### 2. The Bellagio Conservatory & Botanical Gardens",
      "Located just minutes from our store, the Bellagio Conservatory transforms 14,000 square feet into breathtaking seasonal floral displays featuring towering palm trees, waterfalls, and thousands of exotic tropical orchids.",
      "### 3. Golden Tiki Lounge in Chinatown",
      "For evening tropical cocktails, head over to The Golden Tiki. Step through their doors into a dimly lit Polynesian paradise filled with carved tiki statues, starry ceiling lighting, and handcrafted rum punch drinks.",
      "### 4. Secret Garden Cabana Pools",
      "Need a sunlit lounge day? Book a shaded cabana surrounded by palm trees and tranquil water lagoons at Mandalay Bay Beach or the Boulevard Pool."
    ]
  },
  {
    id: "b4",
    slug: "mens-guayabera-history-and-fit",
    title: "The Anatomy of a Classic Linen Guayabera Shirt",
    excerpt: "Explore the rich history, intricate alforzas pleating, and effortless gentleman style behind the Caribbean's most iconic summer shirt.",
    category: "Men's Fashion",
    author: {
      name: "Maria Santos",
      role: "Founder & Creative Director",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    date: "June 15, 2026",
    readTime: "4 min read",
    image: "/images/hero_mens_tropical_style.jpg",
    tags: ["guayabera", "menswear", "linen", "caribbean", "style"],
    relatedSlugs: ["how-to-style-resort-linen-for-evening", "sustainable-island-artisan-craftsmanship", "beachside-wedding-elegance-guest-guide"],
    content: [
      "Few garments in menswear convey timeless elegance and cool relaxed sophistication quite like the traditional guayabera shirt.",
      "Known throughout Cuba, Mexico, Puerto Rico, and the Florida Keys as the 'Mexican Wedding Shirt' or 'Caribbean Tuxedo', the guayabera has a storied past rooted in tropical practicality.",
      "### The Origin Story",
      "Legend has it that in the 18th century, a seamstress in Sancti Spíritus, Cuba, crafted a lightweight linen shirt for her husband with four large pockets so he could carry guava fruits (*guayabas*) home from the orchards. The versatile design quickly spread across island communities.",
      "### Key Anatomical Features of a Genuine Guayabera",
      "1. **Alforzas (Vertical Pleats):** Parallel vertical pleats running down the front and back of the shirt, traditionally hand-stitched with fine precision.",
      "2. **Four Front Pockets:** Two upper chest pockets and two lower waist pockets with button closures.",
      "3. **Straight Hem & Side Vents:** Unlike standard dress shirts, guayaberas feature a straight hem with buttoned side slits designed to be worn un-tucked for maximum airflow.",
      "### How to Wear It Today",
      "Pair a crisp white or sand 100% linen guayabera with tailored chino shorts or lightweight linen pants for beach weddings, summer cocktail parties, or resort dinners."
    ]
  },
  {
    id: "b5",
    slug: "sustainable-island-artisan-craftsmanship",
    title: "Behind the Weave: Supporting Fair-Trade Artisans Across French Polynesia & Oaxaca",
    excerpt: "Meet the family-owned workshops behind our hand-stitched leather sandals, ATA grass circle bags, and handwoven palm sun hats.",
    category: "Artisan Stories",
    author: {
      name: "Maria Santos",
      role: "Founder & Creative Director",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    date: "May 30, 2026",
    readTime: "5 min read",
    image: "/images/live_highlight_1.jpg",
    tags: ["artisans", "fair-trade", "craftsmanship", "sustainability"],
    relatedSlugs: ["ocean-jewelry-mother-of-pearl-care", "how-to-style-resort-linen-for-evening", "eco-conscious-fashion-sustainable-tropical-fabrics"],
    content: [
      "At Island Vibe Treasures, every hat, bag, sandal, and piece of jewelry tells a story of cultural heritage and human dedication.",
      "Instead of mass-producing items in corporate factories, we build direct long-term partnerships with independent family workshops and artisan cooperatives across Bali, Oaxaca, Key West, Oahu, and Tahiti.",
      "### Handwoven ATA Grass Bags in Bali",
      "Our Tulum and Ubud straw circle bags are handwoven by women artisans in East Bali using wild-growing ATA grass vines. Each bag takes up to 4 weeks to weave, after which it is traditional smoked over coconut husks to give the grass its golden warm hue and subtle natural woody scent.",
      "### Leather Cobblers in Oaxaca, Mexico",
      "Our Island Dream woven sandals are crafted in a small family workshop in Oaxaca where leatherwork skills have been passed down through four generations. Each pair features hand-stitched leather straps and cushioned cork footbeds built for a lifetime of sun-filled memories.",
      "### Supporting Coral Reef Restoration",
      "Beyond fair-trade wages, 5% of proceeds from our Coral collection are donated directly to non-profit coral reef restoration projects in the Florida Keys and Tahiti."
    ]
  },
  {
    id: "b6",
    slug: "tropic-vacation-packing-checklist",
    title: "The Ultimate Resort Wear Packing List for Your Next Island Getaway",
    excerpt: "Never overpack again. The 10 versatile island pieces that create 20+ stunning beach-to-dinner outfits with minimal luggage space.",
    category: "Travel Guide",
    author: {
      name: "Ashley K.",
      role: "Style Consultant",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    date: "May 14, 2026",
    readTime: "5 min read",
    image: "/images/hero_tropical_resort_wear.jpg",
    tags: ["packing", "travel", "vacation", "resortwear", "capsule-wardrobe"],
    relatedSlugs: ["how-to-style-resort-linen-for-evening", "las-vegas-hidden-tropical-spots", "sun-protection-style-handwoven-hat-guide"],
    content: [
      "Packing for a tropical getaway should be exciting — not stressful! By focusing on lightweight, mix-and-match resort pieces, you can easily pack for a week-long island vacation in a single carry-on bag.",
      "### The 10-Piece Island Capsule Wardrobe",
      "1. **White Linen Maxi Dress:** The ultimate day-to-night hero piece.",
      "2. **Coral Wrap Skirt:** Pairs with swimsuits by day and silk tanks by night.",
      "3. **Crochet Tunic Cover-up:** Effortless poolside glamour.",
      "4. **Classic Linen Guayabera or Shirt:** Versatile layering piece.",
      "5. **Woven Sun Hat:** Essential UV protection with timeless style.",
      "6. **18k Gold Shell Pendant & Hoop Earrings:** Elevated sparkle.",
      "7. **Handwoven Straw Crossbody Tote:** Fits your book, sunscreen, and phone.",
      "8. **Comfortable Leather Woven Sandals:** Perfect for cobble streets.",
      "9. **Palm Print Sarong Wrap:** Functions as a scarf, skirt, or beach blanket.",
      "10. **Organic Monoi Body Oil:** Deep hydration for sun-kissed skin."
    ]
  },
  {
    id: "b7",
    slug: "beachside-wedding-elegance-guest-guide",
    title: "Tropical Wedding Dress Codes: What to Wear for Beachside Elegance",
    excerpt: "Demystifying 'Beach Formal', 'Resort Cocktail', and 'Tropical Chic'. Learn how to pick fabrics, footwear, and accessories that look stunning and feel cool in ocean breeze.",
    category: "Wedding Style",
    author: {
      name: "Maria Santos",
      role: "Founder & Creative Director",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    date: "April 29, 2026",
    readTime: "6 min read",
    image: "/images/live_highlight_2.jpg",
    tags: ["wedding", "beach-wedding", "dress-code", "resortwear", "formalwear"],
    relatedSlugs: ["how-to-style-resort-linen-for-evening", "mens-guayabera-history-and-fit", "ocean-jewelry-mother-of-pearl-care"],
    content: [
      "Receiving a wedding invitation with 'Beach Formal' or 'Tropical Elegant' written on the card often triggers equal parts excitement and panic. How do you balance high elegance with sea sand, tropical heat, and ocean breezes?",
      "### Decoding 'Beach Formal'",
      "Beach formal implies standard black-tie elegance tailored to an outdoor coastal environment. For women, flowing maxi dresses in breathable silk chiffon, high-grade linen-rayon blends, or hand-embroidered organza work exceptionally well.",
      "For men, traditional heavy black wool tuxedos are out. Instead, choose lightweight tailored linen suits in beige, navy, or soft mint, paired with crisp cotton shirts or embroidered formal guayaberas.",
      "### Footwear Solutions for Sand & Grass",
      "Stilettos sink into seaside sand and lawn grass immediately. Opt for chunky block heels, dressy leather espadrilles, or embellished flat sandals. Men should wear un-socked suede loafers or clean leather boat shoes.",
      "### Finishing Touches",
      "Complete your look with water-resistant makeup, light gold shell jewelry, and a compact handwoven clutch that holds your essentials effortlessly."
    ]
  },
  {
    id: "b8",
    slug: "secrets-of-rare-sea-glass-origins-and-care",
    title: "Gems of the Tides: The History & Beauty of Genuine Island Sea Glass",
    excerpt: "From historical shipwreck bottles to ocean-tumbled treasures, discover how genuine sea glass is formed over decades and turned into fine jewelry.",
    category: "Jewelry Care",
    author: {
      name: "Elena Rostova",
      role: "Master Jeweler & Gemologist",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
    date: "April 18, 2026",
    readTime: "5 min read",
    image: "/images/hero_artisan_ocean_jewelry.jpg",
    tags: ["sea-glass", "jewelry", "ocean-treasures", "artisans", "craftsmanship"],
    relatedSlugs: ["ocean-jewelry-mother-of-pearl-care", "sustainable-island-artisan-craftsmanship"],
    content: [
      "Every piece of authentic sea glass is a miniature historical relic sculpted by the unstoppable power of ocean waves over 20 to 100 years.",
      "### How Sea Glass Is Formed",
      "When glass bottles, glass jars, or tableware enter the ocean, waves relentlessly tumble the shards against sand, rocks, and gravel. Over decades, saltwater leaches out alkalis, creating the signature frosty, velvety texture that synthetic glass imitations can never truly replicate.",
      "### Rare Colors & Their Origins",
      "- **Cobalt Blue:** Originally derived from vintage 19th-century milk of magnesia bottles and poison flasks.",
      "- **Turquoise & Seafoam Green:** Sourced from old seltzer bottles and vintage beverage containers.",
      "- **Red & Amberina:** The rarest sea glass in existence, created using real gold chloride salts in vintage glassware.",
      "### Set in 18k Gold & Sterling Silver",
      "At Island Vibe Treasures, our sea glass gems are ocean-found along beach coastlines and custom bezel-set in solid sterling silver or 18k gold plating without harsh artificial tumbling or chemical acid treatments."
    ]
  },
  {
    id: "b9",
    slug: "island-aromatherapy-essential-oil-rituals",
    title: "Island Aromatherapies: Coconut, Frangipani & Monoi Beauty Rituals",
    excerpt: "Transport your senses to Tahitian shores with natural botanical oils, cold-pressed coconut hydration, and aromatic floral essences.",
    category: "Tropical Living",
    author: {
      name: "Ashley K.",
      role: "Style Consultant",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    date: "April 02, 2026",
    readTime: "4 min read",
    image: "/images/live_stream_cover.jpg",
    tags: ["skincare", "monoi", "essential-oils", "tropical-living", "self-care"],
    relatedSlugs: ["tropic-vacation-packing-checklist", "destination-las-vegas-story-of-island-vibe-treasures"],
    content: [
      "The scent of the tropics has an uncanny ability to soothe stress and revive the soul. In Polynesian culture, natural floral infusions and cold-pressed botanical oils have been cultivated for centuries as essential daily self-care rituals.",
      "### The Sacred Gift of Tahitian Monoi Oil",
      "Monoï de Tahiti is created by macerating fresh Tiaré (Tahitian gardenia) blossoms in pure cold-pressed refined coconut oil for a minimum of 10 days. The result is a luxurious, intensely hydrating nectar used to nourish hair, soothe sun-kissed skin, and leave a subtle floral aroma.",
      "### How to Incorporate Island Aromatherapies at Home",
      "1. **After-Shower Hydration:** Apply warm Monoi or coconut body oil immediately after taking a warm shower while your skin is still damp to lock in deep moisture.",
      "2. **Hair Mask Revival:** Work 3 to 4 drops through the ends of dry or damaged hair before bedtime for silky smooth strands.",
      "3. **Tropical Diffuser Blends:** Blend 3 drops of Plumeria/Frangipani, 2 drops of Lime, and 2 drops of Vanilla essential oil to fill your living space with warm ocean breeze vibes."
    ]
  },
  {
    id: "b10",
    slug: "destination-las-vegas-story-of-island-vibe-treasures",
    title: "Bringing Hawaii & Tahiti to the Mojave: The Island Vibe Story",
    excerpt: "How a family's love for tropical artisan crafts evolved into Las Vegas's premier island lifestyle boutique and online resort destination.",
    category: "Brand Story",
    author: {
      name: "Carlos Santos",
      role: "Co-Founder & Vegas Local",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    date: "March 20, 2026",
    readTime: "5 min read",
    image: "/images/hero_island_boutique_store.jpg",
    tags: ["brand-story", "las-vegas", "boutique", "entrepreneurship", "artisans"],
    relatedSlugs: ["las-vegas-hidden-tropical-spots", "sustainable-island-artisan-craftsmanship"],
    content: [
      "Many people ask us: *'Why open a tropical resort wear and island jewelry boutique in the middle of the Nevada desert?'*",
      "The answer lies in our family's deep personal roots across Oahu and Puerto Rico. After years of traveling to coastal artisan communities, we realized that people everywhere — especially those living in dry desert landscapes or bustling cities — crave the calming, restorative energy of island living.",
      "### The Paradise Road Boutique Sanctuary",
      "When we opened our doors on Paradise Road in Las Vegas, we didn't just want to sell clothing — we wanted to build an immersive oasis. From hand-poured coconut candles and lush tropical foliage to live weekly shopping streams hosted right inside the shop, Island Vibe Treasures quickly grew into a beloved community hub.",
      "### Our Commitment to Authenticity",
      "Every product featured in our boutique and online store is chosen with intention. We work directly with master jewelers, hat weavers, and linen tailors who share our passion for ethical production, durability, and vibrant coastal aesthetic."
    ]
  },
  {
    id: "b11",
    slug: "eco-conscious-fashion-sustainable-tropical-fabrics",
    title: "Breathe Easy: Why Organic Linen & Bamboo Are Future of Resortwear",
    excerpt: "Learn why natural plant fibers perform significantly better in humid tropical heat than synthetic polyester, while protecting coastal ecosystems.",
    category: "Sustainability",
    author: {
      name: "Maria Santos",
      role: "Founder & Creative Director",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    date: "March 08, 2026",
    readTime: "5 min read",
    image: "/images/hero_tropical_resort_wear.jpg",
    tags: ["sustainability", "eco-friendly", "linen", "bamboo", "resortwear"],
    relatedSlugs: ["how-to-style-resort-linen-for-evening", "sustainable-island-artisan-craftsmanship"],
    content: [
      "Fast fashion synthetics like polyester, nylon, and acrylic trap body heat and moisture against skin, making warm tropical days feel uncomfortably humid. Worse yet, synthetic micro-fibers wash into municipal waterways and pollute ocean habitats.",
      "At Island Vibe Treasures, we choose 100% natural, biodegradable plant fibers for all our resort wear collections.",
      "### The Natural Magic of Flax Linen",
      "- **High Thermal Conductivity:** Linen rapidly conducts heat away from your skin, keeping body temperature 3 to 4 degrees cooler than cotton or polyester.",
      "- **Low Water & Pesticide Footprint:** Flax plants require 0 artificial irrigation, growing naturally on rainwater in coastal European climates.",
      "- **Biodegradable:** Pure linen fully decomposes naturally within 2 weeks without leaving toxic micro-plastics behind.",
      "### Silky Smooth Bamboo & Rayon Viscose",
      "For garments requiring a silky fluid fall, we utilize eco-certified bamboo and banana tree fiber viscose harvested from responsibly managed sustainable crops."
    ]
  },
  {
    id: "b12",
    slug: "sun-protection-style-handwoven-hat-guide",
    title: "The Crown of Summer: Choosing & Caring for Handwoven Sun Hats",
    excerpt: "From Panama straw to Balinese ATA grass, discover how to select the ideal brim width, UPF sun protection, and proper travel care for woven hats.",
    category: "Style Guide",
    author: {
      name: "Ashley K.",
      role: "Style Consultant",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    date: "February 22, 2026",
    readTime: "4 min read",
    image: "/images/live_highlight_1.jpg",
    tags: ["sun-hats", "panama-hat", "accessories", "style", "travel"],
    relatedSlugs: ["tropic-vacation-packing-checklist", "sustainable-island-artisan-craftsmanship", "how-to-style-resort-linen-for-evening"],
    content: [
      "A handwoven sun hat is the ultimate combination of functional UV protection and timeless summer glamour.",
      "### Choosing the Perfect Silhouette",
      "1. **Wide Brim Boater:** Ideal for beach loungers seeking maximum shoulder and facial shade.",
      "2. **Classic Fedora:** Perfect for sightseeing, city walks, and resort lunching.",
      "3. **Packable Visor:** Great for active travelers who want shade without sacrificing luggage space.",
      "### How to Travel with Straw & Palm Hats",
      "Never crush a structured straw hat into a tightly packed suitcase! Instead:",
      "- **Stuff the Crown:** Fill the inside of your hat crown with soft socks or rolled swimsuits, then lay it flat at the bottom of your suitcase before packing clothes around the brim.",
      "- **Wear It On the Plane:** The easiest and safest way to travel with your favorite wide-brim hat is to wear it onto your flight."
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== currentSlug && (current.relatedSlugs.includes(p.slug) || p.category === current.category))
    .slice(0, limit);
}
