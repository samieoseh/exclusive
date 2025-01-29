export interface ProductProps {
    category: string;
    name: string;
    price: number;
    starRating: 1 | 2 | 3 | 4 | 5;
    discount: number;
    imageUrl: string;
    type: "hot" | "new" | "sale";
    owner: string;
  }