import { CategoryPage } from "@/components/category-page";
import { womenProducts } from "@/data/products";

export default function WomenPage() {
  return (
    <CategoryPage
      categoryKey="women"
      title="Women's Apparel"
      subtitle="Island elegance for the modern tropical soul"
      products={womenProducts}
      heroColor="bg-gradient-to-r from-coral-500 to-ocean-500"
    />
  );
}
