import { CategoryPage } from "@/components/category-page";
import { accessoriesProducts } from "@/data/products";

export default function AccessoriesPage() {
  return (
    <CategoryPage
      categoryKey="accessories"
      title="Artisan Accessories"
      subtitle="Handwoven sun hats, silk scarves, raffia totes, and tropical accessories"
      products={accessoriesProducts}
      heroColor="bg-gradient-to-r from-emerald-600 to-ocean-600"
    />
  );
}
