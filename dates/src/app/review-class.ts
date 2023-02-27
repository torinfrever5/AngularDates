export interface ReviewClass {
  dateId: number;
  reviews: [ {
    reviewId: number;
    title: string;
    description: string;
    mediaId: number //media attatchments
    priceLevel: number;
  }];
}
