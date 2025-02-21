import { Product } from "./Product";

export type Basket = {
  basketId: string;
  items: Item[];
};

export class Item {
  constructor(product: Product, quantity: number) {
    this.productId = product.id;
    this.name = product.name;
    this.pictureUrl = product.pictureUrl;
    this.brand = product.brand;
    this.type = product.type;
    this.price = product.price;
    this.quantity = quantity;
  }
  productId: number;
  name: string;
  pictureUrl: string;
  price: number;
  type: string;
  brand: string;
  quantity: number;
}
