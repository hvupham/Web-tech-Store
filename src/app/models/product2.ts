export interface Product {
    id: number;
    imageURL: string;
    brand: string;
    title: string;
    color: string;
    discountedPrice: number;
    price: number;
    arrImg: string[];
    discountPersent: string;
    type: {
      Capacity: string;
      quantity: number;
      discountedPrice: number;
    }[];
    quantity: number;
  }