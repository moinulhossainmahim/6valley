import FeaturedProducts from "../featuredProducts";
import { Tabs, Tab } from "../tabs/Tabs";

const RecommendedProducts = () => {
  return (
    <div className="py-16 bg-[#fcfcfc]">
      <h2 className="text-center font-bold text-lg mb-4">Recommended For You</h2>
      <div>
      <Tabs>
        <Tab label="Featured Products">
          <FeaturedProducts />
        </Tab>
        <Tab label="Top Rated">
          <div>
            Top Rated Products
          </div>
        </Tab>
        <Tab label="Best Selling">
          <div>
            Best Selling Products
          </div>
        </Tab>
        <Tab label="Latest Products">
          <div>
            Latest Products
          </div>
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
