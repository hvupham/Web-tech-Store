import { Injectable } from '@angular/core';
import { Product,ProductType,PriceTotals } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
 
  // productType: ProductType[] = [];
  constructor() { }

  addToCart(product: Product, productType: ProductType) {

    const updatedProduct: Product = {
      ...product,
      type: [productType] // với mỗi lần add cart mới thì tạo ra một type mới 
    };

    this.items.push(updatedProduct);
  }
  getType(product: Product){
    return product.type;
  }
  getTypea(product: ProductType){
    return product;
  }
  getproductType(product: Product){
    const productTypes: ProductType[] = [];
    for (const product of this.items) 
    {
      productTypes.push(...product.type);

    }
    return productTypes;
  }
  addtoCartPlusToggle(product: Product)
  {
    this.items.push(product);
  }
  getTotalPrice(){
    return this.items.reduce((total,item) => total + (+item.type[0].Capacity.discountedPrice*item.quantity),0);
  }
  getItems() {
    return this.items;
  }
  removeItem(id: number){
   return this.items.filter(item => item.id !== id);

  }
  setQuantity(id: number, value: number) {
    const productToUpdate = this.items.find(item => item.id === id);
    
    if (productToUpdate) {
      // If the product is found, update its quantity
      productToUpdate.quantity = value;
    }
  }
getItemForID(id: number): Product | undefined {
  return this.items.find(item => item.id === id);
}
clearCart() {
    this.items = [];
    return this.items;}


}