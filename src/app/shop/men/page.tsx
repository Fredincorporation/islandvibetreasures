import { CategoryPage } from "@/components/category-page";
import { menProducts } from "@/data/products";

export default function MenPage() {
  return (
    <CategoryPage
      categoryKey="men"
      title="Men's Style"
      subtitle="Effortless tropical sophistication & premium linen guayaberas"
      products={menProducts}
      heroColor="bg-gradient-to-r from-ocean-600 to-emerald-600"
    />
  );
}
