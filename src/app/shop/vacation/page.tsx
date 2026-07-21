import { CategoryPage } from "@/components/category-page";
import { vacationProducts } from "@/data/products";

export default function VacationPage() {
  return (
    <CategoryPage
      categoryKey="vacation"
      title="Vacation Essentials"
      subtitle="Coconut candles, rum cakes, sand-proof blankets, and tropical island living"
      products={vacationProducts}
      heroColor="bg-gradient-to-r from-ocean-700 to-gold-600"
    />
  );
}
