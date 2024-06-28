import FeaturedProducts from "../featured-products";
import LatestProducts from "../latest-products";
import { Tabs, Tab } from "../shared/tabs/Tabs";
import TopRatedProducts from "../top-rated-products";

const RecommendedProducts = () => {
  return (
    <div className="py-16 bg-[#fcfcfc]">
      <h2 className="text-center font-bold text-lg mb-8">Recommended For You</h2>
      <div>
      <Tabs>
        <Tab label="Featured Products">
          <FeaturedProducts />
        </Tab>
        <Tab label="Top Rated">
          <TopRatedProducts />
        </Tab>
        <Tab label="Best Selling">
          <div>
            Best Selling Products
          </div>
        </Tab>
        <Tab label="Latest Products">
          <LatestProducts />
        </Tab>
        <Tab label="New Arrivals">
          <div>
            New Arrivals
          </div>
        </Tab>
      </Tabs>
    </div>
    </div>
  )
}

export default RecommendedProducts;
