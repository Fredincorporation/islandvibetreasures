"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  Filter,
  Star,
  RotateCcw,
} from "lucide-react";
import { ProductCard } from "@/components/product-card";
import {
  products,
  womenProducts,
  menProducts,
  jewelryProducts,
  accessoriesProducts,
  vacationProducts,
} from "@/data/products";
import { Product } from "@/types";
import { cn, formatPrice } from "@/lib/utils";

const categoryTabs = [
  { label: "All Treasures", value: "all" },
  { label: "Women's Apparel", value: "women" },
  { label: "Men's Style", value: "men" },
  { label: "Jewelry", value: "jewelry" },
  { label: "Accessories", value: "accessories" },
  { label: "Vacation Essentials", value: "vacation" },
];

const sortOptions = [
  { label: "Trending", value: "trending" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
];

export default function ShopPage() {
  const params = useParams();
  const categoryParam = Array.isArray(params.category)
    ? params.category[0]
    : (params.category as string | undefined);

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || "all");
  const [sort, setSort] = useState("trending");
  const [search, setSearch] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Determine base products from activeCategory
  const baseProducts = useMemo(() => {
    if (activeCategory === "women") return womenProducts;
    if (activeCategory === "men") return menProducts;
    if (activeCategory === "jewelry") return jewelryProducts;
    if (activeCategory === "accessories") return accessoriesProducts;
    if (activeCategory === "vacation") return vacationProducts;
    return products;
  }, [activeCategory]);

  // Extract subcategories
  const subcategories = useMemo(() => {
    const subs = Array.from(
      new Set(baseProducts.map((p) => p.subcategory).filter(Boolean))
    ) as string[];
    return ["all", ...subs];
  }, [baseProducts]);

  // Extract sizes & colors
  const allSizes = useMemo(() => {
    return Array.from(
      new Set(
        baseProducts.flatMap((p) =>
          p.variants.filter((v) => v.type === "size").map((v) => v.value)
        )
      )
    ).sort();
  }, [baseProducts]);

  const allColors = useMemo(() => {
    return Array.from(
      new Set(
        baseProducts.flatMap((p) =>
          p.variants.filter((v) => v.type === "color").map((v) => v.value)
        )
      )
    ).sort();
  }, [baseProducts]);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];

    // Subcategory
    if (selectedSubcategory !== "all") {
      result = result.filter((p) => p.subcategory === selectedSubcategory);
    }

    // Search query
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Price range
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Rating
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    // In Stock
    if (onlyInStock) {
      result = result.filter((p) => p.inStock);
    }

    // Sizes
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.variants.some(
          (v) => v.type === "size" && selectedSizes.includes(v.value)
        )
      );
    }

    // Colors
    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.variants.some(
          (v) => v.type === "color" && selectedColors.includes(v.value)
        )
      );
    }

    // Sorting
    if (sort === "newest") {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [
    baseProducts,
    selectedSubcategory,
    search,
    priceRange,
    minRating,
    onlyInStock,
    selectedSizes,
    selectedColors,
    sort,
  ]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 300]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedSubcategory("all");
    setMinRating(0);
    setOnlyInStock(false);
    setSearch("");
    setSort("trending");
  };

  const hasActiveFilters =
    activeCategory !== "all" ||
    selectedSubcategory !== "all" ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    onlyInStock ||
    minRating > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 300 ||
    search !== "";

  const activeFilterCount =
    (activeCategory !== "all" ? 1 : 0) +
    (selectedSubcategory !== "all" ? 1 : 0) +
    selectedSizes.length +
    selectedColors.length +
    (onlyInStock ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 300 ? 1 : 0) +
    (search ? 1 : 0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-ocean-900 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight"
          >
            {activeCategory === "all"
              ? "All Island Treasures"
              : categoryTabs.find((c) => c.value === activeCategory)?.label}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-ocean-200 mt-2 max-w-md mx-auto text-sm sm:text-base"
          >
            Hand-curated tropical fashion, artisan jewelry & island lifestyle
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gold-400 text-xs font-semibold uppercase tracking-widest mt-2"
          >
            {filteredProducts.length} Treasures Found
          </motion.p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-sand-200 bg-white sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-2 py-3 scrollbar-none">
          {categoryTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveCategory(tab.value);
                setSelectedSubcategory("all");
              }}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border cursor-pointer",
                activeCategory === tab.value
                  ? "bg-ocean-800 text-white border-ocean-800 shadow-xs"
                  : "bg-sand-50 text-ocean-900 border-sand-200 hover:bg-sand-100 hover:border-sand-300"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Pills */}
      {subcategories.length > 2 && (
        <div className="bg-sand-50/70 border-b border-sand-200 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-1.5 scrollbar-none">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium capitalize whitespace-nowrap transition-colors",
                  selectedSubcategory === sub
                    ? "bg-gold-500 text-ocean-950 font-bold"
                    : "text-sand-700 hover:bg-white"
                )}
              >
                {sub === "all" ? "All Subcategories" : sub.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toolbar & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sand-400" />
            <input
              type="text"
              placeholder="Search treasures by name, material, tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-sand-200 rounded-xl text-sm text-ocean-900 placeholder:text-sand-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sand-400 hover:text-sand-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border shadow-xs cursor-pointer",
                showFilters || hasActiveFilters
                  ? "bg-ocean-600 text-white border-ocean-600"
                  : "bg-white border-sand-200 text-ocean-800 hover:border-ocean-300 hover:bg-sand-50"
              )}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-coral-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none pl-3.5 pr-8 py-2.5 bg-white border border-sand-200 rounded-xl text-sm font-medium text-ocean-800 focus:outline-none focus:ring-2 focus:ring-ocean-500 cursor-pointer shadow-xs"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sand-400 pointer-events-none" />
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="hidden sm:flex items-center gap-1 px-3 py-2 text-xs font-semibold text-coral-600 hover:text-coral-700 hover:bg-coral-50 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-sand-50 border border-sand-200 rounded-xl">
            <span className="text-xs font-bold text-ocean-900 mr-1 uppercase tracking-wider">
              Active Filters:
            </span>
            {activeCategory !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand-200 rounded-full text-xs font-medium text-ocean-800">
                Category: {categoryTabs.find((c) => c.value === activeCategory)?.label}
                <button
                  onClick={() => setActiveCategory("all")}
                  className="hover:text-coral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedSubcategory !== "all" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand-200 rounded-full text-xs font-medium text-ocean-800">
                Subcategory: {selectedSubcategory}
                <button
                  onClick={() => setSelectedSubcategory("all")}
                  className="hover:text-coral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 300) && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand-200 rounded-full text-xs font-medium text-ocean-800">
                Price: {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
                <button
                  onClick={() => setPriceRange([0, 300])}
                  className="hover:text-coral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {minRating > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand-200 rounded-full text-xs font-medium text-ocean-800">
                Rating: {minRating}+ ★
                <button
                  onClick={() => setMinRating(0)}
                  className="hover:text-coral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {onlyInStock && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand-200 rounded-full text-xs font-medium text-ocean-800">
                In Stock Only
                <button
                  onClick={() => setOnlyInStock(false)}
                  className="hover:text-coral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedSizes.map((sz) => (
              <span
                key={sz}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand-200 rounded-full text-xs font-medium text-ocean-800"
              >
                Size: {sz}
                <button
                  onClick={() => toggleSize(sz)}
                  className="hover:text-coral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedColors.map((clr) => (
              <span
                key={clr}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-sand-200 rounded-full text-xs font-medium text-ocean-800"
              >
                Color: {clr}
                <button
                  onClick={() => toggleColor(clr)}
                  className="hover:text-coral-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="text-xs font-bold text-coral-600 hover:underline ml-auto"
            >
              Clear All Filters
            </button>
          </div>
        )}

        <div className="flex gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block w-64 flex-shrink-0 sticky top-28"
            >
              <div className="bg-white rounded-2xl border border-sand-200 p-5 space-y-6 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-sand-200">
                  <h3 className="font-bold text-ocean-900 text-sm flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-ocean-600" />
                    Filter Options
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-xs text-coral-500 hover:underline font-semibold"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Price Presets */}
                <div>
                  <h4 className="text-xs font-bold text-ocean-800 uppercase tracking-wider mb-2.5">
                    Price Range
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {[
                      { label: "Under $40", range: [0, 40] },
                      { label: "$40–$80", range: [40, 80] },
                      { label: "$80+", range: [80, 300] },
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() =>
                          setPriceRange(preset.range as [number, number])
                        }
                        className={cn(
                          "px-2.5 py-1 rounded-md text-xs font-medium border transition-colors",
                          priceRange[0] === preset.range[0] &&
                            priceRange[1] === preset.range[1]
                            ? "bg-ocean-600 text-white border-ocean-600"
                            : "bg-sand-50 border-sand-200 text-ocean-800 hover:bg-sand-100"
                        )}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min={0}
                      max={300}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full accent-ocean-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-sand-600 font-semibold">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Minimum Rating */}
                <div>
                  <h4 className="text-xs font-bold text-ocean-800 uppercase tracking-wider mb-2">
                    Minimum Rating
                  </h4>
                  <div className="space-y-1.5">
                    {[4.5, 4.0, 0].map((ratingVal) => (
                      <button
                        key={ratingVal}
                        onClick={() => setMinRating(ratingVal)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border",
                          minRating === ratingVal
                            ? "bg-ocean-50 border-ocean-400 text-ocean-900 font-bold"
                            : "border-transparent text-sand-700 hover:bg-sand-50"
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                          {ratingVal === 0 ? "All Ratings" : `${ratingVal} Stars & Up`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                {allSizes.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-ocean-800 uppercase tracking-wider mb-2.5">
                      Size
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {allSizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => toggleSize(sz)}
                          className={cn(
                            "px-2.5 py-1 rounded-lg text-xs font-medium transition-all border",
                            selectedSizes.includes(sz)
                              ? "bg-ocean-600 text-white border-ocean-600"
                              : "bg-white border-sand-200 text-ocean-800 hover:border-ocean-400"
                          )}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Colors */}
                {allColors.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-ocean-800 uppercase tracking-wider mb-2.5">
                      Color
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {allColors.map((clr) => (
                        <button
                          key={clr}
                          onClick={() => toggleColor(clr)}
                          className={cn(
                            "px-2.5 py-1 rounded-lg text-xs font-medium transition-all border",
                            selectedColors.includes(clr)
                              ? "bg-ocean-600 text-white border-ocean-600"
                              : "bg-white border-sand-200 text-ocean-800 hover:border-ocean-400"
                          )}
                        >
                          {clr}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* In Stock Only */}
                <div className="pt-2 border-t border-sand-200">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={onlyInStock}
                      onChange={(e) => setOnlyInStock(e.target.checked)}
                      className="w-4 h-4 rounded border-sand-300 text-ocean-600 focus:ring-ocean-500 accent-ocean-600"
                    />
                    <span className="text-xs font-bold text-ocean-900">
                      In Stock Only
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-sand-200 p-12 text-center my-4">
                <span className="text-6xl block mb-4">🏝️</span>
                <h3 className="text-2xl font-bold text-ocean-900 mb-2 font-[family-name:var(--font-display)]">
                  No treasures found
                </h3>
                <p className="text-sand-600 max-w-sm mx-auto mb-6">
                  Try adjusting your filters or category selection.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white font-bold text-sm rounded-xl transition-colors shadow-md"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.02, 0.3) }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
