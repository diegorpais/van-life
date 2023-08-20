export default interface ReviewsModel {
  total: string;
  overallRating: Array<OverallRating>;
  customerRating: Array<CustomerRating>;
}

export interface OverallRating {
  stars: string;
  amount: number;
  percentage: string;
}

export interface CustomerRating {
  id: number;
  rating: number;
  name: string;
  date: string;
  text: string;
}