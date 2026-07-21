import { CategoryPage } from "@/components/category-page";
import { jewelryProducts } from "@/data/products";

export default function JewelryPage() {
  return (
    <CategoryPage
      categoryKey="jewelry"
      title="Signature Jewelry"
      subtitle="Ocean-inspired 18k gold mother-of-pearl, turquoise & Tahitian pearl treasures"
      products={jewelryProducts}
      heroColor="bg-gradient-to-r from-gold-500 to-coral-500"
    />
  );
}
