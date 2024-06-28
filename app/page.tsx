import AllProducts from "@/components/all-products";
import Hero from "@/components/hero";
import RecommendedProducts from "@/components/recommended-products";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecommendedProducts />
      <AllProducts />
    </main>
  );
}
