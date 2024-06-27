export interface IProduct {
  id: number;
  images: string[];
  name: string;
  unit_price: number;
  purchase_price: number;
  discount: number;
  created_at: string;
  reviews_avg_rating: string;
  category: {
    id: number;
    name: string;
  },
};
