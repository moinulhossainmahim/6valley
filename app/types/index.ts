export interface ICategory {
  id: number;
  name: string;
};

export interface IProduct {
  id: number;
  images: string[];
  name: string;
  unit_price: number;
  purchase_price: number;
  discount: number;
  created_at: string;
  reviews_avg_rating: string;
  category: ICategory;
  category_id: number;
  flash_deal_status: number;
  reviews_count: number;
};
