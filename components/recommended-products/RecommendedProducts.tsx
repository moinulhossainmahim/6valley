import FeaturedProducts from "../featured-products";
import LatestProducts from "../latest-products";
import NewArrivals from "../new-arrivals";
import EmptyProductList from "../shared/empty-list";
import { Tabs, Tab } from "../shared/tabs/Tabs";
import TopRatedProducts from "../top-rated-products";

const RecommendedProducts = () => {
  return (
    <div className="py-12 bg-[#fcfcfc]">
      <h2 className="text-center font-semibold tracking-widest text-2xl mb-8">Recommended For You</h2>
      <div>
      <Tabs>
        <Tab label="Featured Products">
          <FeaturedProducts />
        </Tab>
        <Tab label="Top Rated">
          <TopRatedProducts />
        </Tab>
        <Tab label="Best Selling">
          <EmptyProductList title="Empty list" subTitle="No products found for best selling" />
        </Tab>
        <Tab label="Latest Products">
          <LatestProducts />
        </Tab>
        <Tab label="New Arrivals">
          <NewArrivals />
        </Tab>
      </Tabs>
    </div>
    </div>
  )
}

export default RecommendedProducts;
