export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  supply: string;
  productinf: string;
  isFeatured: boolean;
  detail: Detail;
  actor: Actor;
  images: Image[]
};

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Detail {
  id: string;
  name: string;
  info: string;
};

export interface Actor {
  id: string;
  name: string;
  nickname: string;
};
