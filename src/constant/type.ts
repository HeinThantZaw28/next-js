export interface linkProps {
  id: number;
  title: string;
  url: string;
}

export interface sliderDataProps {
  id: number;
  title: string;
  image: string;
}

export interface MenuProps {
  id: number;
  slug: string;
  title: string;
  desc: string;
  img: string;
  color: string;
}

export interface Product {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
  options?: ProductOptionProps[];
}

export interface ProductOptionProps {
  title: string;
  additionalPrice: number;
}


export interface tableDataProps {
  orderId: string;
  date: string;
  price: string;
  products: string;
  status: string;
}