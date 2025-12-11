export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  size?: string;
  isLiked?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selected: boolean;
}

export type PaymentMethod = 'toss' | 'kakao' | 'naver' | 'card';
export type ShippingMethod = 'delivery' | 'pickup';
