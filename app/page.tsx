import AllProducts from "@/components/shared/all-products";
import Hero from "@/components/shared/hero";
import RecommendedProducts from "@/components/shared/recommended-products";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecommendedProducts />
      <AllProducts />
    </main>
  );
}
